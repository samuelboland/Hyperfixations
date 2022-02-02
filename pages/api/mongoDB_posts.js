import clientPromise from '../../lib/mongodb';
import { getSession } from 'next-auth/react';
import { ObjectId } from 'mongodb';

const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;
const collection = 'posts';

export async function getPosts() {
    const client = await clientPromise;
    const db = client.db(MONGODB_DB_NAME);
    const data = await db.collection(collection).find({}).sort({ created_at: -1 }).toArray();
    const posts = JSON.parse(JSON.stringify(data));
    return posts;
}

export async function newPost(req) {
    const client = await clientPromise;
    const db = client.db(MONGODB_DB_NAME);
    let bodyObject = JSON.parse(JSON.stringify(req.body));
    let newPost = await db.collection(collection).insertOne(bodyObject);
    return newPost.acknowledged;
}

export async function deletePost(req) {
    const client = await clientPromise;
    const db = client.db(MONGODB_DB_NAME);
    const postId = req.body;
    const deletedPost = await db.collection(collection).deleteOne({ _id: ObjectId(postId) });
    return deletedPost;
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
