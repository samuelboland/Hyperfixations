---
title: Add pagination to posts index page
slug: add-pagination-posts-index-page
description: In which I discuss adding pagination to my posts index page using the static generation options available in Next.js
author: null
date: '2022-03-05T18:35:50.330Z'
tags: []
categories: []
---

## Table of contents

## Introduction

My posts index page is getting rather long. As of right now, there are 32 posts. That's a lot of posts to load on every view. 

To fix this, I want to add pagination. Pagination is the process of splitting long lists into multiple pages. 

Most applications can query some backend somewhere to get the data as needed. I don't have that ability with NextJS, since it's statically generated and I'm not using a database. 

Instead, I'm going to pre-generate the amount of pages that I need, and populate them with 10 posts each. With 32 posts, I would need 4 pages. However, I definitely do not want to specify the amount of pages; it should be determined automatically at build time. 

I also want to have standard pagination links at the top and bottom of the page for things like "next" and "back." 

## Determining the number of pages for pagination

This is a perfect example of where I would use `getStaticPaths`. I should be able to do something like this: 

```js
export async function getStaticPaths() {
    // Figure out total number of pages
    return {
        paths: [
            {params: {page: '1'}},
            {params: {page: '2'}}, 
            //etc
        ]
    }
}
```
Let's try to build that. I will replace `pages/index.js` with `pages/[index].js` Remember, putting the filename in brackets tells Next JS that this route requires an input in the URL, and will output something based on that input. In short, it's dynamic.

Also note that you can **only have one dynamic path per directory**. Currently, my pages directory looks like:

- `posts/`
- `posts/[index].js`
- `posts/[post].js`

That won't work, because now there are two dynamic paths vying for attention when you go to `https://hyperfixations.io/pages/<some stuff>`. To deal with this, I adjusted the directory structure somewhat to:

- `blog/`
- `blog/post`
- `blog/post/[post].js`
- `blog/[index].js`

Now, if you go to `hyperfixations.io/blog/1`, you will go to my new page that I'm building now. If you go to `hyperfixations.io/blog/post/<blog post name>`, you get a post. I also adjusted all links in other parts of my app to compensate. 

I ended up with the following code, which I will explain below: 

```js
export async function getStaticPaths() {
    const dir = '_posts';
    const postsPerPage = 10;
    const postCount = fs.readdirSync(dir + '/').length;
    const pageCount = Math.ceil(postCount / postsPerPage);
    const paths = [];
    for (var i = 0; i < pageCount; i++) {
        paths.push({ params: { index: (i + 1).toString() } });
        // Adding 1 here so that the page routes start at 1.
        // Just feels better. No real reason.
    }
    return {
        paths,
        fallback: false,
    };
}
```
I know that I could have made it more concise, but I always prefer to err on the side of readability over code beauty. The steps are as follows: 

- Define the directory that we pull posts from
- Define how many posts we want per page
- Get the total number of posts by reading from the filesystem and counting
- Get the total number of pages by dividing (number of posts) by (number per page), and rounding up.
- Create an empty "paths" array. This is the object that we will eventually return.
- Create a loop, and iterate once for each page. Each time, add a new param to the list of paths. 
- Return the paths and the [fallback option](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false). 

Note that I added 1 to each of the index page URLs. It just feels nicer to go to `https://hyperfixations.io/blog/1` than `/blog/0`. But maybe that's just me. 🤷

## Filling pages with posts

Now that I can generate the paths, I need to define how they are filled. This is a job for `[getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)`. I handle this very similarly to how my old index page worked. Here's what it looks like: 

```js
export async function getStaticProps({ params: index }) {
    const dir = '_posts';
    const allPosts = parseAllFromDir({ dir });
    const postStartingIndex = (index.index - 1) * 10;
    const posts = allPosts.slice(postStartingIndex, postStartingIndex + 10);
    return {
        props: {
            posts,
        },
    };
}
```

- Define the directory that the posts are in
- Get all of the posts
- Determine a starting index
- Get posts from (starting index) to (starting index + 10).
- Return those posts to the page for display. 

Finally, I display them. For this, I literally just copied/pasted the code that I used in my old index page. I made some adjustments to the `NextSeo` attributes, but nothing functional.