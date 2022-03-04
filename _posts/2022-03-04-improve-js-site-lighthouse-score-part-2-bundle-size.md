---
title: Improve Next.js Site Lighthouse Score, Part 2 - Bundle Size
slug: improve-js-site-lighthouse-score-part-2-bundle-size
description: Following up on my previous post, I discuss how to analyze and reduce the size
  of a javascript bundle in a Next.js application
author: Sam Boland
date: 2022-03-04T01:03:12.035Z
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

The page that I linked above explains how to install it. However, if you have a custom `next.config.js` already, like I did, just know that you need to wrap your custom config with the `withBundlyAnalyzer` function. For example, my config looks like this: 

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

Thankfully, the maintainers of the project know about this and offer a ["Light Build" option.](https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build) I can leave the actual code for the highlighter untouched and simply alter my imports, specifying that I want to use the `Light` version, and selecting/registering the specific languages that I want to support. My imports now look like this: 

```js
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)
```
Let's see what our bundle looks like now. 

![Image of bundle analysis after specifying languages to import](/Screen%20Shot%202022-03-04%20at%2010.12.44%20AM.png)

That is significantly different. The total size for the highlighter is now 249.31 kb, only 23% the size that it was before. That's a huge reduction! 

But I think we can do better. There's still a lot of `style` code being shipped that I don't need. I wonder why? 

To figure this out, I opened up the file at `react-syntax-highlighter/dist/cjs/styles/prism`, the location that I am importing my style from. It turns out that I was doing it incorrectly. By importing `styles/prism` I was importing all styles. What I want to do is import `styles/prism/{style goes here}`. My new import looks like this: 

```js
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
```

Let's see how that changes things. 

![Image of my bundle with languages AND styles specified](/Screen%20Shot%202022-03-04%20at%2010.21.53%20AM.png)

Yet another huge difference. The highlighting code now only takes up 94.63 kb. That's only 8.87% the original size. 

