---
title: Less is More - Removing my theme changer
slug: removing-theme-changer
description: In which I discover the danger of too many choices, and intentionally pare down my options to reduce cognitive load in my design.
author: Sam Boland
date: '2022-03-02T18:23:37.180Z'
tags: []
categories: []
---

## Table of contents

## Addition by Subtraction

I've been doing a lot of addition by subtracting. When I started working on this site, I used a custom rich text editor behind an authentication layer, which spoke to a MongoDB cloud instance to store my posts.

I then moved to using Markdown edited in vscode, but stored in a separate repository.

Now I just store it local to this repository, since it's just so much easier to think about.

I'm finding that the same urge is present when designing the feel of the site. A bit ago, I added a Theme Changer component. This component used Next Themes, a nice package that allows you to, as you might expect, switch themes on the fly.

## Too many choices, too little time

But I discovered a problem. As I sought to make my site look and feel better, I found that having to design for multiple themes was actually very hard. I mean, I can barely design for one theme, let alone 3 or 4!

I decided to prune my choices and focus on a single theme, which I hope to hand write later on. For now, I'm settling on the `CMYK` theme provided by DaisyUI.

## Dev Log

There's not too much to show here, but the process was basically this:

- `npm uninstall next-themes`
- Delete the ThemeChanger.jsx component
- Remove references to that component from my Header.jsx
- Remove the ThemeProvider wrapper from my _app.js, and remove the import for it
