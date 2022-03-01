---
title: Messing with Fonts
slug: messing-fonts
description: I want to be intentional with the fonts that I use, and not just use the ones that come with Typography, nice as they are.
author: Sam Boland
date: '2022-02-27T01:43:27.183Z'
tags: []
categories: []
---

## Table of contents

## Introduction

### Explanation

I want to get better at fonts. I want to be intentional with the fonts that I use, and not just use the ones that come with Typography, nice as they are. To that end, I'm going to play around with a few popular font pairings that I find around the internet.

## Dev Log

### The precarious legal position of Google Fonts

Next.js makes it easy to use Google's fonts. It has specific support for them, which you can read about [in the official docs](https://nextjs.org/docs/basic-features/font-optimization).

Google Fonts are also extremely easy to use.

The downside is that they are currently in strange legal territory. Here's a [Hacker News discussion](https://news.ycombinator.com/item?id=30135264) on the topic. Much like Google Analytics, Google Fonts are under intense scrutiny by European courts for their data collection practices. I'm all for it, I love seeing the big tech giants be reigned in.

This does complicate things somewhat though.

### How to serve Google Fonts locally in Next.js

To get around this restriction, I can host the fonts locally. There are a few blogs around that explain how to do this. [Here's one](https://kirazhang.com/posts/nextjs-custom-fonts).

We need to do the following:

- Create a `fonts` folder under `public`.
- Create subfolders for each font inside of that.
- Place the font files within the relevant subfolder.
- In `global.css`, use `@font-face` delcarations to specify the fonts, styles, and weights.
- Preload fonts in a high level component, perhaps Layout?

Let's give it a shot.

### Roboto + Open Sans

One of the most common suggestions that I see is a combination of Roboto + Open Sans. Roboto serves as the font for headlines, and Open Sans works for the body copy.

Using the instructions outlined above, I created folders for each font within `public/fonts`. I downloaded the font families from Google Fonts, extracted them, and placed the files that I needed there.

![Image of my fonts folder](/Screen%20Shot%202022-02-27%20at%2011.15.48%20AM.png)

Now I will add the fonts that I want to use in my `global.css`.

I did a quick test to make sure that it worked before importing every font style, with this:

```css
@font-face {
    font-family: "OpenSans";
    src: url("/fonts/OpenSans/OpenSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
}

@layer base {
    html {
        font-family: OpenSans, system-ui, sans-serif
    }
    h1,h2,h3,h4,h5,h6{
        font-family: Roboto;
    }
}
```

And this did update my fonts! However, I'm missing things like **bold** or *italics* or light or heavy, etc. I need to add all of those now. Manually. :(

Wait. Wait a minute. Can I use a variable font file?

>Quick aside: A variable font file is a newer format that encodes all the weights and styles of a font in a single file.

Ok, after a quick Google, the answer is: YES! See [here](https://www.dharsh.dev/blog/variable-web-fonts-with-nextjs-and-tailwindcss)!

I think that the variable font file was included in the font download from Google...

Yep, here's how to do it for Open Sans:

```css
@font-face {
    font-family: "OpenSans";
    src: url("/fonts/OpenSans/OpenSans.ttf");
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
}
```

And that worked! Light and Bold and other weights work great.

One problem: Roboto does not have a variable font.

### Source Sans and Open Sans

Source Sans looks nice. [This](https://typ.io/fonts/source_sans_pro/with/open_sans) site has some good examples of font pairings, and shows a site with Source sans and Open Sans together, along with the weights for each section.

I've made a few more changes, and I have something that looks somewhat decent. I'm not happy with the colors, to be honest, and I think that my reliance on DaisyUI's theming capabilities might be holding me back. I should revisit that soon.

## Conclusion

Here's what my Posts Index page looks like now:

![Image of post index page with more styling](/Screen%20Shot%202022-02-28%20at%205.22.48%20PM.png)

And here's my Post page:

![Image of post show page with more styling](/Screen%20Shot%202022-02-28%20at%205.22.42%20PM.png)

While I've been reading about fonts, I've also read tips for how to structure a good blog post. One thing that I'm going to stop doing is sub-subheadings. One layer is enough, more than that is awkward.  
