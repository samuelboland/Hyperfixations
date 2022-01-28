import React from 'react';
import styles from '../styles/Standard.module.css';
import ReactMarkdown from 'react-markdown';
import { getPosts } from './api/fetchBlogPosts';

const Blog = ({ posts }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Posts</h1>
            {posts.map((post) => (
                <div className={styles.blogPost} key={post.id}>
                    <h2>{post.title}</h2>
                    <ReactMarkdown>{post.body}</ReactMarkdown>
                    <h2 className={styles.postDate}>{post.id}</h2>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps(context) {
    const jsonData = await getPosts();

    return {
        props: {
            posts: jsonData,
        },
    };
}

export default Blog;
