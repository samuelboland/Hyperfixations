---
title: Generating a Sitemap for my NextJS Site
slug: generating-sitemap-nextjs-site
description: Sitemaps are used by search engines to know what pages exist on your site, and how they are connected. They can then index and present them more easily.
author: Sam Boland
date: '2022-02-25T04:04:25.574Z'
tags: []
categories: [SEO]
---

## Table of contents

## Introduction

### Explanation

A sitemap is, usually, an xml file that sits at the root of your site, which search engines use to discover and index pages. I want to have one to increase the chances of my articles appeariing on search engines.

## Dev Log

I found a [blog post](https://levelup.gitconnected.com/nextjs-dynamic-sitemap-2184b33bce2d) that outlines a general approac for how to do this.

It's rather genius actually. We create a page like any other, and name is `sitemap.xml.js`. It uses `getStaticProps` to generate a sitemap dynamically based on all of my possible inputs, very similar to how we use `getStaticPaths` in the `[post].js` file.

With just a few very minor tweaks for file paths differences, I have a working sitemap generator.

```js
import React from 'react';
import * as fs from 'fs';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
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

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
```
