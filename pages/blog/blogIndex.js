import React from 'react';
import AnimationWrapper from '../../components/AnimationWrapper';
import { getPosts } from '../api/mongoDB_posts';
import styles from './blog.module.scss';

const blogIndex = ({ posts }) => {
    return (
        <AnimationWrapper>
            <main>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2 className={styles.post_header}>{post.title}</h2>
                        <p className={styles.post_body}>{post.body}</p>
                    </div>
                ))}
            </main>
        </AnimationWrapper>
    );
};

export async function getStaticProps(context) {
    const posts = await getPosts();
    return {
        props: { posts },
    };
}
export default blogIndex;
