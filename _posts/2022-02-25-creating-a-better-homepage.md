---
title: Creating a Better Homepage
slug: creating-homepage
description: null
author: Sam Boland
date: '2022-02-25T22:50:09.751Z'
tags: []
categories: []
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
