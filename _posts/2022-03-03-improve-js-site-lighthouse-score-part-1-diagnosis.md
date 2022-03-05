---
title: Improve Next.js Site Lighthouse Score, Part 1 - Diagnosis
slug: improve-js-site-lighthouse-score-part-1-diagnosis
description: In which I discover that my site is not as performance as I thought it was, and look for ways to improve it.
author: null
date: '2022-03-03T06:20:33.469Z'
tags: []
categories: []
---

## Table of contents

## A Small Aside

You might notice that this article is written as a "How To." Up until now, I have written posts primarily as stream-of-consciousness journals. I have decided that posts that contain work that is, in some way, **substantively** different than simply implementing what someone else wrote should be written as general How-Tos. In the near future, I will implement a way to *only* see the sorts of posts that you want to see. 

Now, let's move on to the article. 

## What is a Lighthouse Score? And why do I care?

Google's [Lighthouse](https://web.dev/) performance score has become a standard for page performance across the web. It measures things like:

- page load time
- javascript bundle size
- accessibility
- readability

And more. Take a look at the link above, particularly the [learn web vitals](https://web.dev/learn-web-vitals/) section.

Google takes these scores into account for page ranking in searches. 

The Lighthouse score for my landing page is very good. There is area for improvement in the Accessibility category, which I will address later on. The scores are: 

- Performance: 100
- Accessibility: 97
- Best Practices: 100
- SEO: 100

![Image of Lighthouse score results](/Screen%20Shot%202022-03-03%20at%2011.36.47%20AM.png)

However, the score for the `/posts` route, which is the index page for all of my posts, is decidedly less good. The scores are:

- Performance: 66
- Accessibility: 87
- Best Practices: 100
- SEO: 100

The scores for my largest individual post are even worse: 

- Performance: 44
- Accessibility: 87
- Best Practices: 100
- SEO: 100

Each of these measurements have suggestions for how to improve. Let's take a look at them and see how high we can get these scores. 

It's also worth noting that these scores are **not reproducible**. Sequential measurements yield different scores. However, it looks like the suggestions remain the same from run to run.

## Inspecting the Performance Suggestions from Lighthouse

The largest performance opportunity in my `posts/index` page is "Reduce unused JavaScript." 

![Google's suggestions to "reduce unused javascript"](/Screen%20Shot%202022-03-03%20at%204.36.34%20PM.png)

It also offers some diagnostics. This one suggests reducing JavaScript execution time: 

![Image showing the suggestions to reduce Javascript execution time](/Screen%20Shot%202022-03-03%20at%204.36.39%20PM.png)

And this one suggests minimizing main-thread work:

![Image showing the suggestions to minimize main-thread work](/Screen%20Shot%202022-03-03%20at%204.36.48%20PM.png)

I suspect that the latter two items are correlated with the size of the Javascript bundle. If this is true, then addressing the primary suggestion should help these as well.

Moving over to the individual post page, the primary suggestions are to "Properly size images" and "Serve images in next-gen formats." The diagnostics also indicate similar Javascript bundle size issues as my post index page, but also suggest to "Avoid an excessive DOM size." It says that I have 2,301 DOM elements. 

This might have to do with how I handle code highlighting. Each block of code results in many, many `<span>`s. Each empty space, each word of a single color, each line number all get their own `<span>`. This seems horribly inefficient, but perhaps it's the best way. I'll have to research how it is handled on professional sites. 

## Next Steps

I now have some items to tackle. In my next few posts, I intend to go through the performance suggestions outlined above. To reiterate, they are: 

- Reduce Javascript bundle size
- Reduce image size
- Use modern web formats for images

I will work on the first one, reducing the bundle size, for my next post. 

