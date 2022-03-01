---
title: 'Styling my blog post index page with Tailwind CSS, Part 5: Blog Pages'
slug: styling-blog-post-index-page-tailwind-css
description: I'm rather happy with how the landing page looks now, so it's time to move on to the posts index page. I intend to make it look better as I continue to learn.
author: null
date: '2022-02-26T23:41:06.990Z'
tags: []
categories: [Tailwind CSs, DaisyUI]
---

## Table of contents

## Introduction

### Explanation

I'm rather happy with how the landing page looks now, so it's time to move on to the posts index page. I intend to make it look better as I continue to learn Tailwind CSS.

## Dev Log

One of the main problems that I always have with design is knowing what I want. And, even if I do know what I want, I frequently don't have the technical skills to get there.

Thankfully, I'm wise enough now to know that this doesn't mean I should give up. It just means that I have a lot of low-hanging fruit to discover and pluck.

In more practical terms, it means I get to `****` around a bit.

I have just done such a bit of messing about, and I think I have something vaguely nice. A few of the things that I did:

- Move the date above the title for each post
- Add the description from the frontmatter to each post link
- Add a small border between posts
- Center them on the page

I also changed the header and footer, as you may have noticed. Now the page feels slightly less claustrophobic.

Further, I adjusted the landing to something that works better with all themes. I figured out how to add a nice "lifted card" effect, like here:

![Image showing the central "hyperfixations.io" hero banner on a rectangle with a semi-transparent white background, with a drop shadow](/Screen%20Shot%202022-02-26%20at%204.40.34%20PM.png)

Here's the code to make that happen:

```js
<div className="mx-auto w-3/4 rounded-lg bg-gray-50 bg-opacity-30 shadow">
```

Note that you add opacity to the *current div*. So this creates a background in this div with a gray color, and then applies 30% opacity to it. This interacts with the drop shadow and the background to look like it's slightly elevated.

Another thing that I did was add the navigation bar on top.
I wanted it to be accessible from anywhere, and for users to be able to change the theme from the home page. I kept the transparent navbar from my previous story though.
