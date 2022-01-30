import React from 'react';
import { getPosts } from '../api/mongoDB_posts';

const blogIndex = ({ posts }) => {
    return (
        <main>
            <h1>My Current Fixation</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </main>
    );
};

export async function getStaticProps(context) {
    const posts = await getPosts();
    return {
        props: { posts },
    };
}
export default blogIndex;
