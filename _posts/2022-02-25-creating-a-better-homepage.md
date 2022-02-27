---
title: 'Styling my Next.js application with Tailwind CSS, Part 4: Homepage'
slug: creating-homepage
description: My current landing page looks, frankly, awful. Just awful. Let's figure out how to make it look better using TailwindCSS and DaisyUI!
author: Sam Boland
date: '2022-02-25T22:50:09.751Z'
tags: [UX, Tailwind, DaisyUI, Home]
categories: [Tailwind, DaisyUI]
---

## Table of contents

## Introduction

### Explanation

My current homepage isn't great. It's a lot of text and a weirdly-placed link. It has odd spacing issues. It's just...boring. And not good. Kind of bad.

I want to fix this.

Specifically, I want a pretty homepage that explains, in brief, what this site is about, and then contains links to my pages. Currently, I only have one sort of page: posts. I may expand that in this story.

## Dev Log

### Create "about me" page

I want users to know who I am, but I don't want it front and center. To do this, I will change my current `index.js` to become an `about.js`. I will then create a new, empty, `index.js` to serve as the root of my site.

### Learning more about Tailwind and DaisyUI Colors

As I discussed in a previous article, I am using [DaisyUI](https://daisyui.com/) for a lot of my components, supplemented with examples from [Tailblocks](https://tailblocks.cc/). One downside of the latter, though, is that it is built with standard Tailwind CSS in mind, and not DaisyUI.

Daisy supports theming, which requires that colors be allowed to change depending on the theme. When building a theme-aware componenet, we must therefore use the Daisy theme color variables. Tailblocks, however, specifies colors that are not theme-aware. That just means that wherever we see something like `text-gray-600` in a Tailblocks component, we have to change it to something else. What we change it to will depend on the function of that component.

The [DaisyUI Docs on Color](https://daisyui.com/docs/colors/) explain how the colors in their themes are specified. There are only a few required fields, each of which have a few optional permutations. They are:

- Primary: Used for most objects that require a standout color. Things like Buttons, or logos, or to show current selection, etc. This is *not* your background color.
- Secondary: Similar to the above, but for non-primary flair. Something like a secondary button that you want to stand out from the primary. Imagine a "Sign Up" and "Log In" button pair.
- Accent: Another one like the above, but for things that need to really stand out. Use sparingly. Perhaps an "abort" button.
- Neutral: Perhaps a back button, or log out, or cancel order. Something that needs to be seen, but you don't want to highlight.
- Base-100: The main background color of your site.

### Creating a new index page

I am, unfortunately, writing this after the fact. I spent a lot of time playing around with different designs. I'm getting close. The two major breakthroughs were:

- Using a hero banner
- Adding a theme-dependent background gradient

The latter was surprisingly easy. There are tailwind docs that cover [adding a background gradient](https://tailwindcss.com/docs/gradient-color-stops#basic-usage). I just used the DaisyUI theme colors instead of the built-in tailwind colors. That way, it changes with the theme.

### Taking Stock: The work so far

Here's what I have currently:

![New home page with a nice CSS gradient](/Screen%20Shot%202022-02-26%20at%202.50.13%20PM.png)

I think it looks rather nice. But there's a problem: It looks like garbage on mobile:

![Poor formatting on mobile](/Screen%20Shot%202022-02-26%20at%202.51.31%20PM.png)

I only discovered this *after* I had already pushed it to master.

### Fixing the index page on mobile

I am now writing in real-time again. I wonder what's going wrong here...

Ah, it was the size of my header text. I need to add some breakpoint changes. I'll define the "standard," aka mobile, as `text-xl`, and then add one each for small, medium, and large viewports.

[Reading the tailwind docs](https://tailwindcss.com/docs/responsive-design#targeting-a-single-breakpoint), I found out that we don't use a size indicator like `sm` to target mobile devices. `sm` means "small breakpoint *and up*". The unprefixed version is what we need.

It looks much better now!

![Image showing that there is no more weird white space at the bottom of the mobile view](../public/Screen%20Shot%202022-02-26%20at%203.37.00%20PM.png)
