---
title: Improve Next.js Site Lighthouse Score, Part 3 - Image Optimization
slug: improve-js-site-lighthouse-score-part-3-image-optimizations
description: In which I figure out how to fix the image optimization logic that I previously had working but which broke at some unknown point.
author: Sam Boland
date: '2022-03-04T20:00:58.331Z'
tags: [Lighthouse, Optimizaton, Performance]
categories: [Development Log]
---

## Table of contents

## Introduction

I previously wrote a post about how I used the Next js `<Image>` component in my posts. Remember, these posts are written in Markdown, which is then converted into HTML by `Remark` with the wonderful [`ReactMarkdown` package](https://github.com/remarkjs/react-markdown).

`ReactMarkdown` accepts `components`, which are custom extensions that provide additional functionality. I use two components currently:

- A syntax highlighting component
- A component that replaces regular `<img>` tags with Next's `<Image>` tag

The latter component appears to not be working. 

## React-Markdown's Component option only accepts a single input

The section heading above contains the solution. It turns out, `React-Markdown` only accepts a single object as input in the `components =` parameter. Either that, or I couldn't figure out how to make it accept multiple. 

The solution, then, is simple. I just put both of my components into a single file.

```js
import Image from 'next/image';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

// Separating this out into separate file, since I use it in multiple places.

export const MarkdownComponents = {
    // Stole this first component directly from here:
    // https://amirardalan.com/blog/use-next-image-with-react-markdown
    // Convert Markdown img to next/image component and set height, width and priority
    // example: ![AltText {priority}{768x432}](...
    p: (paragraph) => {
        const { node } = paragraph;

        if (node.children[0].tagName === 'img') {
            const image = node.children[0];
            const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
            const isPriority = image.properties.alt?.toLowerCase().includes('{priority}');
            const metaWidth = image.properties.alt.match(/{([^}]+)x/);
            const metaHeight = image.properties.alt.match(/x([^}]+)}/);
            const width = metaWidth ? metaWidth[1] : '768';
            const height = metaHeight ? metaHeight[1] : '432';

            return (
                <Image
                    src={image.properties.src}
                    width={width}
                    height={height}
                    className="postImg"
                    alt={alt}
                    priority={isPriority}
                />
            );
        }
        return <p>{paragraph.children}</p>;
    },
    code({ node, inline, className, ...props }) {
        // Set code language declared in code block: ```lang
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                style={docco}
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers={true}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        );
    },
};
```

Note that the `MarkdownComponents` object is itself composed of multiple objects, each of which is a function that acts upon the parsed text. 

## Stop and check the results

My original Lighthouse score for the largest post on the site, before any improvements, was 44. After the bundle size improvements from the previous post, but before the image optimization above, the score increased to 71. 

After the changes in this article, the score is now 80. An improvement, to be sure, but there's more to do.

For example, the images are now sometimes squished along one axis or the other. Lighthouse also noticed this, and told me that "Image elements do not have explicit width and height." Let's see if we can fix that. 

## Automatically setting dimensions for Next.js Image components parsed from Markdown

I currently define my image's meta attributes like so: 

```js
if (node.children[0].tagName === 'img') {
    const image = node.children[0];
    const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
    const isPriority = image.properties.alt?.toLowerCase().includes('{priority}');
    const metaWidth = image.properties.alt.match(/{([^}]+)x/);
    const metaHeight = image.properties.alt.match(/x([^}]+)}/);
    const width = metaWidth ? metaWidth[1] : '768';
    const height = metaHeight ? metaHeight[1] : '432';

    return (
        <Image
            src={image.properties.src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
        />
    );
}
```
According to this, the width and height should be equal to the dimensions of the original image. If that information is not present, it should default to 768x432. 

I placed a few `console.log` statements after I define the constants in the above code, and found that every image was returning a size of 768*432. This makes sense; the `metaWidth` and `metaHeight` components try to find the image size by looking at the name of the image in the markdown. I do not add the image size there, so of course there is nothing to find. 

After a bit of tinkering, I found a way to automatically fit images in line with the body of the article. I needed to wrap the `<Image>` that I was returning in a `<div>`, which I then set to using relative positioning. I then gave the image itself absolute positioning, set layout to `fill` and objectFit to `contain`. 

Finally, I had to set a height and width for the div itself, which I set to `h-96` and `w-full`. All together, my return statement now looks like this: 

```js
return (
    <div className="relative h-96 w-full">
        <Image
            className="container absolute"
            src={image.properties.src}
            layout="fill"
            objectFit="contain"
            alt={alt}
            priority={isPriority}
        />
    </div>
);
```

This leads to a problem, however. The width of the image, and thus the overall size, is limited to the width of the article that it's embedded in. This is a good thing, but it makes seeing detail in images difficult. 

## Using simple-react-lightbox to make images easier to see

[Simple-react-lightbox](https://www.npmjs.com/package/simple-react-lightbox#getting-started) does precisely what it says it does. It creates lightboxes (pop outs, sort of) for all images on a page. Well, specifically, for all images between the opening and closing tags for the component, but for me, that's the entire page. 

I installed it according to the instructions, which I will not repeat here. It worked right out of the box for me in my local development environment. However, it is a rather large package and increases the size of the javascript bundle that the site delivers to the browser. I will need to see how this affects the Lighthouse score. 

