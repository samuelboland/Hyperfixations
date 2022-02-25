import React from 'react';
import * as fs from 'fs';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://hyperfixations.io'; //This is where you will define your base url. You can also use the default dev url http://localhost:3000
    const staticPaths = fs
        .readdirSync('pages')
        .filter((staticPage) => {
            return !['sitemap.xml.js', '404.js', '_app.js', '_document.js', 'api'].includes(
                staticPage,
            );
        })
        .map((staticPagePath) => {
            return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
        });

    const posts = fs.readdirSync('_posts/').reverse();
    const dynamicPaths = posts.map((singleBlog) => {
        return `${BASE_URL}/posts/${singleBlog.replace('.md', '')}`;
    });

    const allPaths = [...staticPaths, ...dynamicPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
          .map((url) => {
              return `
            <url>
              <loc>${url}</loc>
            </url>
          `;
          })
          .join('')}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
