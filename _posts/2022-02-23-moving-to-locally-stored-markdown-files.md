---
title: Moving to locally-stored Markdown files
slug: moving-locally-stored-markdown-files
description: Moving my posts from a separate Github repo to storing them with my site code.
author: Sam Boland
date: '2022-02-24T04:26:36.757Z'
tags: []
pullRequest: null
---

## Table of contents

## Explanation

This app is not my only side project. I have also been working on a very similar one to help me organize my documents at my job.

That project is very useful for seeing what development would have been like had I taken another path in this app. Sometimes I find that it would have been simpler, and other times, less so.

An example of the former is how I store my posts. In this app, I originally stored them as JSON in a MongoDB instance. Then, I moved to having them on Github in Markdown, but kept them in a separate repository. This lead me down the road of building an API interface to make getting articles easier. That part is documented in previous posts. (See my 2022-02-09 post on "Moving to Github.")

In that other application, I am storing my posts locally. And, honestly, it has been so much simpler to work with.

Currently, the development environment on this app, Hyperfixations.io, is slow. Every time I refresh a page, it has to make an API request to Github again.

I have decided to move my posts for this site into this repository as well.

It feels a bit like giving up, but it's just *so* much easier to work with. And I now have the experience that I gained by creating the API service in the first place.

## Dev Log

This will require some changes to how I get articles. Rather than calling an API, I will have to query the filesystem. Thankfully, Next.js makes this simple.

It will be nice to work with my framework, rather than fight it.

### Moving posts into repository

This part is simple enough, but is a pre-requisite to the rest.

I am creating a `_posts` directory in my repo and copying my posts into it. The underscore puts it near the top of the folder view in vscode, which is useful.

I am now writing this within my `Hyperfixations.io` repo.

### Adjusting image paths

My previous repo used a `/images` folder to store screenshots, but Next expects them to be in a `/public` folder. I also know through experience in my other repository that it will only render images if the image path starts just a `/`. Not `../../something/image.png`, just `/image.png`.  

To fix this, I will do a global find (Cmd+Shift+F) for the string `![`. This is markdown syntax for inserting an image.

From there, I can go into each file and do a find and replace for `/images/`, and replace it with `/`.

### Changing load method from github API to filesystem: Posts index page

Loading my markdown from the local filesystem is significantly easier than via the Github API.

Here is my `getStaticProps` for the posts `index page:

```js
export async function getStaticProps() {
    // We reverse here so that we get the newest posts at the top of the resulting index page.
    // I could reverse it somewhere else, but this is as good of a location as any.
    const files = fs.readdirSync('_posts/').reverse();
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`_posts/${fileName}`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        return {
            slug,
            frontmatter,
            content,
        };
    });
    return {
        props: {
            posts,
        },
    };
}
```

I plan to separate this out into a separate library soon, so that I can reuse it for multiple subfolders within the `_posts` directory.

We now need to import `fs` and `matter`, as well.

```js
import fs from 'fs';
import matter from 'gray-matter';
```

You may notice that this returns posts in a different format than we used before. We return the `slug`, `frontmatter`, and `content` objects, all within `props`, as is required by `getStaticProps`. This also necessitated a few changes to how information is passed around the file. It became more simple in some ways.

My new `PostsComponent` looks like this:

```js
 const PostComponent = ({ slug, frontmatter }) => {
     const FormatDate = ({ date }) => {
         return moment(date).format('dddd, YYYY-MM-DD');
     };
     return (
         <div key={frontmatter.date} className="container mx-auto px-5 py-5">
             <Link href={`/posts/${slug}`}>
                 <a data-cy="postIndexLink">
                     <h2
                         data-cy="postIndexTitle"
                         className="title-font mb-4 text-xl font-medium text-gray-900 sm:text-2xl"
                    >
                        {frontmatter.title}
                    </h2>
                </a>
            </Link>
            <h3 data-cy="postIndexDate">
                <FormatDate date={frontmatter.date} />
            </h3>
        </div>
    );
};
```

One thing that I want to point out is the `{key}`. Remember, in React, if you do something like a `.map`, or a `.forEach`, or some sort of loop, or anything that involves iteratively rendering multiple copies of the same component with different data, React wants you to add a `{key}` to the topmost returned tag. This lets it keep track of which component is which. I use the `{frontmatter.date}` for this, because this contains the datetime down to the thousandth of a second. While this is not *guaranteed* to be unique, it will be for my purposes.

### Changing load method from github API to filesystem: Posts show page

This requires changes to both `getStaticProps` and `getStaticPaths`. As a refresher, both of these methods are special Next.js features that allow it to pre-render all possible pages at build time, rather than when a user opens a page.

`getStaticProps`: In this function, you need to define some way to get the information that you want for each page. You then need to `return` it, inside of an object called `props`. Your main page can then use this as input.

`getStaticPaths`: Here, you must define a way to enumerate all pages that Next needs to pre-render. In our case, this will be a list of all files in my `_posts` directory. You then `return` it inside of an object named `paths`.

You can see a previous post about how I built these to read from the Github API. It involved separating out a lot of logic into a `lib/githubApi.js`  file, which I then just called from my page.

My new method will put all of the logic in the page itself. I will likely pull this out and abstract it a bit later on, but for now, I just want to replicate how it currently works. Here's what it looks like:

```js
//getStaticPaths
export async function getStaticPaths() {
    const realSlug = (fileName) => {
        let extension = path.extname(fileName);
        return path.basename(fileName, extension);
    };
    const files = fs.readdirSync('_posts/');
    const paths = files.map((fileName) => ({
        params: {
            post: realSlug(fileName),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}
```

```js
//getStaticProps
export async function getStaticProps({ params: { post } }) {
    const fileName = glob.sync(`_posts/${post}.*`);
    const file = fs.readFileSync(fileName[0], 'utf-8');
    const { data: frontmatter, content } = matter(file);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

```

Similar to the above section, this also required some minor changes to the page. I now pass `frontmatter` and `content` in `getStaticProps`, rather than passing it all together as a single `post` and then deconstructing it later. I also had to adjust the names of some variables that I used. Otherwise, it was a fairly painless change.

All tests pass, and manual testing shows me that this is actually much quicker, just as I had hoped.

## Conclusion

You can view all changes in the PR associated with this post. Currently, those are in the frontmatter so you can't access them, so you will need to go to the repository directly and find it. But I will fix that soon enough. :)
