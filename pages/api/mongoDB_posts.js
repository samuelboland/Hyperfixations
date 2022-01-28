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

export default async function handler(req, res) {
    const posts = await getPosts();
    res.json({ status: 200, data: posts });
}
