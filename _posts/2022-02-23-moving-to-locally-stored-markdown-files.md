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

We now need to import `fs` and `matter`, as well.

```js
import fs from 'fs';
import matter from 'gray-matter';
```

You may notice that this returns posts in a different format than we used before. We return the `slug`, `frontmatter`, and `content` objects, all within `props`, as is required by `getStaticProps`. This also necessitated a few changes to how information is passed around the file. It became more simple in some ways. 

You might also notice that I'm returning `content` but not using it. In my other application, I have some flags in the text that I use to supply data to the frontend. For example, if the text contains `TODO`, I put a little flag on the post. I may do that again here.

I plan to separate this out into a separate library soon, so that I can reuse it for multiple subfolders within the `_posts` directory.
