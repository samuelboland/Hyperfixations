import axios from 'axios';
const qs = require('qs');

export async function getPosts() {
    const STRAPI_API_BLOG_URL = process.env.STRAPI_API_BLOG_URL;
    const STRAPI_API_KEY = process.env.STRAPI_API_KEY;
    const headers = { headers: { Authorization: `Bearer ${STRAPI_API_KEY}` } };
    // Sort by id descending. Can add additional query parameters here too.
    // See qs documentation for more info.
    const query = qs.stringify({
        sort: ['id:desc'],
    });

    //const url = STRAPI_API_BLOG_URL + `?${query}`;
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const response = await fetch(url, headers);
    const jsonData = await response.json();
    return jsonData;
}

export default async function handler(req, res) {
    const jsonData = await getPosts();
    res.status(200).json(jsonData);
}
