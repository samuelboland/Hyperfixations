import React from 'react';
import styles from '../styles/Standard.module.css';
import { getPosts } from './api/mongoDB_posts';

const Blog = ({ posts }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Current Fixation</h1>
            {posts.map((post) => (
                <div className={styles.blogPost} key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps(context) {
    const posts = await getPosts();
    return {
        props: { posts },
    };
}
export default Blog;
