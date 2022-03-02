---
title: Changing font source to Font Source
slug: changing-font-source-font-source
description: Moving to a significantly easier method of locally hosting fonts with Font Source. 
author: Sam Boland
date: '2022-03-02T02:11:48.507Z'
tags: []
categories: []
---

## Table of contents

## Explanation

I apologize for the title, I couldn't help myself. I ran into a problem when I deployed my recent changes to add new fonts. They weren't visible in production!

I tried to figure out how to fix it, and stumbled upon [Fontsource](https://fontsource.org/docs/getting-started)!

This is an open repository that helps you self-host fonts by providing them as NPM packages. This is very convenient. And what's more, it has all of the fonts that I'm using!

Let's give it a shot.

## Dev Log

It looks like I just need to `npm install` from the `@fontsource` repository. Let's do it!

`npm i @fontsource/open-sans @fontsource/source-sans-3 @fontsource/fira-code`

Ok, then I import it into my `_app.js`. So let's remove the CSS imports and then put them there. After that, I just use them in my CSS classes, just like before...and voila! It worked!

Well that was simple. I hope this works in prod! Pushing now.
