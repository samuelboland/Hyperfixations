import clientPromise from '../../lib/mongodb';

const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

/*export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db(MONGODB_DB_NAME);
    switch (req.method) {
        case 'POST':
            let bodyObject = JSON.parse(req.body);
            let newPost = await db.collection('posts').insetOne(bodyObject);
            res.json(newPost.ops[0]);
            break;
        case 'GET':
            const posts = await db.collection('posts').find({}).toArray();
            res.json({ status: 200, data: posts });
            break;
    }
}*/

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
    switch (req.method) {
        case 'GET':
            const posts = await getPosts();
            res.json({ status: 200, data: posts });
            break;
        case 'POST':
            console.log(req.body);
            console.log(JSON.parse(JSON.stringify(req.body)));
            const status = await newPost(req);
            res.json({ status });
    }
}
