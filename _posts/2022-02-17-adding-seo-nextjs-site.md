---
title: Adding next-seo to my Nextjs site
slug: adding-seo-nextjs-site
description: 'If you want people to be able to find your content in a search, you need to make it as easy as possible for search engines to index your site.'
author: Sam Boland
date: '2022-02-17T17:20:32.331Z'
tags: []
pullRequest: https://github.com/samuelboland/Hyperfixations/pull/41
---

## Table of contents

## Introduction

Search Engine Optimization, or "SEO," is a very important aspect of modern web development. If you want people to be able to find your content in a search, you need to make it as easy as possible for search engines to index your site.

Also, if you're selling a service, you want your site to rank higher in search results than your competitors.

I'm not selling anything here, so I just want to make it easy for people to find this, mostly so I can see my google analytics numbers go up. Big numbers = happy.

### Next-seo

[Next-seo](https://github.com/garmeeh/next-seo) is an npm package for Nextjs that makes it easier to manage page properties that search engines look for.

I'm not familiar with how to actually go about doing SEO though, since I've never done it before, so I'm going to be learning as I go.

### Google Search Console

[Google Search Console](https://search.google.com/search-console/about) is a tool that Google provides to help you optimize aspects of your site for the purposes of search engine indexing.

I signed up for the search console and verified ownership of my domain a few days ago. I had hoped that it would populate some data by then, but alas, it has not.

I do see a way to "inspect" a URL on my site. I just inspected the home page, and it says the the URL is not on Google.

![Image showing that my site is not on Google](/Screen%20Shot%202022-02-17%20at%209.29.10%20AM.png)

There's a way to "request indexing," but I don't want to hit that button until I have some basic SEO in place. So let's get started!

## Dev Log

### Next SEO

I'm going to install and set up Next-seo per the guide on their repo. It looks like I can set up a default configuration in my `_app.js` file, which is nice. I can then overwrite specific pieces per page. I bet I can get a different Title attribute on each post page...I'll have to try that. For now, I'm just going to specify a site-wide config to start.

#### Next-SEO site-wide configuration

Here's what I've added to my `_app.js`:

```js
<NextSeo
    title="Hyperfixations"
    description="Approximate knowledof many things"
    canonical="https://hyperfixations."
    openGraph={{
        url: 'https://hyperfixatons.io/',
        title: 'Hyperfixations',
        description: 'Approximaknowledge of many things',
        site_name: 'Hyperfixations',
    }}
    twitter={{
        handle: '@SamCBoland',
        cardType: 'summary_large_image',
    }}
/>
```

"[OpenGraph](https://ogp.me/)" is a protocol that "enabled any web page to become a rich object in a social graph." Not gonna lie, I haven't looked too deeply into this. I'm just gonna roll with this suggested configuration.

### Page-specific SEO

For my `[posts]` route, I can use some of the information present in the post frontmatter, which is nice! Here's what I did:

```js
<NextSeo
     title={props.data.data.title}
     description="Approximate knowledge of many things"
     canonical={canonicalUrl}
     openGraph={{
         url: 'https://hyperfixatons.io/',
         title: 'Hyperfixations',
         description:
             'Follow along as I create and document the process of building a blog with Next.js! Once complete, I will use this to document my various hobby fixations as they come and go.',
         site_name: 'Hyperfixations',
     }}
     twitter={{
         handle: '@SamCBoland',
         cardType: 'summary_large_image',
     }}
 />
```

The title and URL are automatically generated. I created a function, `canonicalUrl`, like so:

```js
    const router = useRouter();
    const canonicalUrl = 'http://hyperfixations.io' + router.asPath;
```

Remember to `import { useRouter } from 'next/router'` at the top of the file.

The `posts` index page is similar, just without the automatically generated title.

### CircleCI build difficulties

I'm having some issues when trying to build the app on CircleCI:

```js
/root/project/node_modules/next-seo/lib/next-seo.js:215
  if (config.openGraph?.title || updatedTitle) {
                       ^

SyntaxError: Unexpected token '.'
```

This isn't my code, this is in next-seo itself.

My google searches have not garnered much information. It seems like this issue is affecting other people, and is recent. [This reddit thread](https://www.reddit.com/r/nextjs/comments/slw4p6/nextseo_causes_a_crash_in_dev_mode/) from 12 days ago has a comment, posted 8 days ago, that mentions downgrading Next Seo to 4.28.1. I might give that a shot.

My current version is 5.1.0.

Huh, that fixed it.

Time to merge! Let's get some SEO going. :D
