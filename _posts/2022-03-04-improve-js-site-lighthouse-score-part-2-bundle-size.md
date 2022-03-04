---
title: Improve Next.js Site Lighthouse Score, Part 2 - Bundle Size
slug: improve-js-site-lighthouse-score-part-2-bundle-size
description: How I reduced my javascript bundle size and saved nearly 1mb of data transfer in Next JS
author: Sam Boland
date: '2022-03-04T01:03:12.035Z'
tags: []
categories:
  - How To
---

## Table of contents

## Introduction

In my previous post, I discussed how to use Lighthouse to diagnose performance issues with a Next js site. (Well, really any site, but I need keywords so here I am.) 

In this post, I show you how you can act upon this information to improve your score. 

## Figuring out what is taking up space in the javascript bundle

Apparently, the bundle of javascript that my site sends to the client is too large, and is taking too much time to load. But what could cause this?

To find out, I turned to "[Webpack Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)," a tool that generates a visual representation of your bundle, showing you what is included in it, and how much space each piece takes.

The page that I linked above explains how to install it. However, if you have a custom `next.config.js` already, like I did, just know that you need to wrap your custom config with the `withBundleAnalyzer` function. For example, my config looks like this: 

```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  
module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    experimental: {
        esmExternals: false,
    },
    images: {
        domains: ['github.com'],
    },
});
```
With this in place, you can generate the report by building your site with an environment variable set.

```bash
ANALYZE=true npm run build
```
This generates two reports, and should automatically open your browser to display them. One report is for the client, and the other is for the server. I am interested in the client side bundle. Let's see what's taking up space. 

![Representation of the packages taking up space in my client side js bundle](/Screen%20Shot%202022-03-04%20at%2010.01.15%20AM.png)

It appears that I'm shipping syntax highlighting support for *every language that refractor knows*. That seems wasteful. I also include every theme for `react-syntax-highlighter`, even though I only use one. In general, syntax highlighting takes up a lot of space. 

Let's see if we can reduce that. 

## Reducing the amount of code shipped by react-syntax-highlighter

Currently, react-syntax-highlighter is using a massive 1,066 KB, and the majority of that looks like stuff that I don't need. 

Thankfully, the maintainers of the project know about this and offer a ["Light Build" option.](https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build) I can leave the actual code for the highlighter untouched and simply alter my imports, specifying that I want to use the `Light` version, and selecting/registering the specific languages that I want to support. 

But this isn't all that we can optimize. If you look back at that screenshot above, you will also see a lot of Style files included. I bet that we can make that smaller, too, by only importing a single theme. I'm going to copy/paste the example configuration from the `Light` section of the react-syntax-highlighter docs, which I linked above, and then add a few languages that I want to use.

My imports now look like this: 

```js
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
```
Let's see what our bundle looks like now. 

![Image showing a bundle with far fewer files in it](/Screen%20Shot%202022-03-04%20at%2012.17.58%20PM.png)

A massive difference. The highlighting code now only takes up 130.82kb. That's only 12.2% of the original.

## Assessing Lighthouse Score Improvement

The changes above yielded a Lighthouse score of 97 for performance. As a reminder, the previous score was 66. 

There is still room for improvement. It suggests additional reduction of unused JS, and even thinks that I can save 123kb out of 179kb. I wonder how it figures that. I'll look into this more later.

However, this improvement is enough for now. 

I intend to introduce pagination to this page in the near future, which will likely involve additional changes to my score. 