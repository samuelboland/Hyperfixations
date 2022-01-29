import clientPromise from '../../lib/mongodb';
import { getSession } from 'next-auth/react';

const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

export async function getPosts() {
    const client = await clientPromise;
    const db = client.db(MONGODB_DB_NAME);
    const data = await db.collection('posts').find({}).toArray();
    const posts = JSON.parse(JSON.stringify(data));
    return posts;
}

export async function newPost(req) {
    const client = await clientPromise;
    const db = client.db(MONGODB_DB_NAME);
    let bodyObject = JSON.parse(JSON.stringify(req.body));
    let newPost = await db.collection('posts').insertOne(bodyObject);
    console.log(newPost);
    return newPost.acknowledged;
}

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (session) {
        switch (req.method) {
            case 'GET':
                const posts = await getPosts();
                res.json({ status: 200, data: posts });
                break;
            case 'POST':
                const newPostResponse = await newPost(req);
                res.json({ newPostResponse });
                break;
            case 'DELETE':
                const deleteResponse = await deletePost(req);
                res.json({ deleteResponse });
                break;
        }
    } else {
        res.send({ error: 'You must be signed in to view the protected content on this page.' });
    }
}
