---
title: Add Table of Contents to Posts
slug: add-table-contents-posts
description: null
author: Sam Boland
date: '2022-02-25T01:52:32.454Z'
tags: []
categories: [Posts]
---

## Table of contents

## Introduction

### Explanation

It would be very nice to have an automatically-generated table of contents for each of my posts. It would be even nicer if that table of contents included links that I could click to be taken to that section of the page.

Thankfully, this is quite simple to do with `ReactMarkdown`.

I need two packages: `remark-toc` and `rehype-slug`.

`remark` and `rehype` are parts of the [`Unified`](https://unifiedjs.com/) ecosystem. This ecosystem "compiles content to syntax trees and syntax trees to content," according to their site.

`remark` operates on markdown, and `rehype` operates on hypertext.

What's more, `ReactMarkdown`, the plugin that I use to display my posts, was developed with this ecosystem in mind.

It's plug and play. :)

## Dev Log

This will be quick. First, install the plugins.

```bash
npm install remark-toc rehype-slug
```

Import the plugins into the `[post].js` file:

```js
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
```

Then, adjust the `ReactMarkdown` component to include the plugins:

```js
<ReactMarkdown
    data-cy="postShowBody"
    components={(MarkdownComponents, SyntaxHighlight)}
    remarkPlugins={[remarkToc]}
    rehypePlugins={[rehypeSlug]}
>
    {content}
</ReactMarkdown>
```

And that's that.

![Image showing a table of contents under a previous post](/Screen%20Shot%202022-02-24%20at%206.09.54%20PM.png)

### Formatting Requirements

Make sure to format the markdown correctly. Add a heading named `Table of contents` at the top, and have the next heading at the same level as the table of contents is. Like so:

```md
## Table of contents

## Introduction

### Explanation

It would be very nice to have an automatically-generated table of contents for each of my posts. It would be even nicer if that table 
```
