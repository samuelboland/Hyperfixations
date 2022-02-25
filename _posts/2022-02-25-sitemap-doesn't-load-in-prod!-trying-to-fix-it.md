---
title: Sitemap doesn't load in prod! Trying to fix it
slug: sitemap-doesn-load-prod-fix
description: I thought that I had a great sitemap solution, but alas! I did not. It doesn't load in prod.
author: Sam Boland
date: '2022-02-25T21:12:40.023Z'
tags: [Sitemap]
categories: [Backend]
---

## Table of contents

## Introduction

### Explanation

I really should have done prod testing for my previous post on adding a sitemap! I used `getServerSideProps` to generate the xml whenver the page is accessed. But at that point, it's too late! There is no server! Or at least, not one with access to my entire file structure.

I need this page to be statically generated at build time.

## Dev Log

### Attempt 1: Change `getServerSideProps` to `getStaticProps`

I mean, this seems like the simplest way, right? Let's change it.

This returns an error:

![Screenshot showing an error about how set Header is undefined](../public/Screen%20Shot%202022-02-25%20at%201.15.24%20PM.png)

### Attempt 2: using `getInitialProps`

`getInitialProps` is an older method in Nextjs, but is still supported. From what I understand, it's some sort of combo of server-side and client-side rendering? Next docs suggest using one of the other `getSOMETHINGprops` methods, but let's try this.I saw a post abut making a sitemap, [here](https://stackoverflow.com/questions/64936872/next-js-is-there-any-way-to-render-an-xml-file), that uses it.

When I change my method to use `getInitialProps`, I get an error about how it can't resolve the `fs` module.

![Image showing an error about how the site cannot resolve the `fs` module](../public/Screen%20Shot%202022-02-25%20at%201.27.13%20PM.png)

A quick google gives me a [possible answer.](https://stackoverflow.com/questions/65442366/cant-use-fs-in-getinitialprops)

Further reading, though, has dissuaded me from that method.

Hmm...perhaps one of the Script methods I saw earlier?

### Attempt 3: Dynamic Sitemap generation through a post-build script in Next JS

There's a few posts like [this one](https://www.epicprogrammer.com/2022/01/create-dynamic-sitemap-with-nextjs.html) that suggest writing a script that builds the sitemap as a static file upon build. I think that I can adapt this to the code that I have already.

First, I'll the code that is within `sitemap.xml.js` to a `scripts/generate-sitemap.mjs` file, and delete the former file.

I need to refactor it a bit. I remove a lot of the React-y and Next-y stuff, like the declaration for `getServerSideProps`, the main page return, the props return, and anything else. I then wrap up the entire thing in a single function, `Sitemap()`, and call it at the very end of the file.

It now looks like this:

```js
// ./scripts/generate-sitemap.mjs
import * as fs from 'fs';

const Sitemap = () => {
    const BASE_URL = 'https://hyperfixations.io'; //This is where you will define your base url. You can also use the default dev url http://localhost:3000
    const staticPaths = fs
        .readdirSync('pages')
        .filter((staticPage) => {
            return !['sitemap.xml.js', '404.js', '_app.js', '_document.js', 'api'].includes(
                staticPage,
            );
        })
        .map((staticPagePath) => {
            return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
        });

    const posts = fs.readdirSync('_posts/').reverse();
    const dynamicPaths = posts.map((singleBlog) => {
        return `${BASE_URL}/posts/${singleBlog.replace('.md', '')}`;
    });

    const allPaths = [...staticPaths, ...dynamicPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
          .map((url) => {
              return `
            <url>
              <loc>${url}</loc>
            </url>
          `;
          })
          .join('')}
    </urlset>
  `;

    fs.writeFileSync('public/sitemap.xml', sitemap);
};

Sitemap();
```

Now let's test it!

Running:

```bash
node ./scripts/generate-sitemap.mjs
```

And...wow, it worked! There's a sitemap at sitemap.xml, and I can access it from my site. This is awesome.

I added this command into a `postbuild` npm command in my `package.json`.

### Running postbuild on site build on Vercel

The [Vercel Docs](https://vercel.com/docs/concepts/deployments/build-step#build-command) show how to set up a custom build command. I'm going to change mine from `npm run build` to `npm run build && npm run postbuild`.
