import AnimationWrapper from '../../components/AnimationWrapper';
import { getPosts } from '../api/mongoDB_posts';
import { React, useState } from 'react';
import TiptapDisplay from '../../components/TiptapDisplay';
import { AiOutlineDelete } from 'react-icons/ai';

import styles from './blog.module.scss';

const blogIndex = ({ posts }) => {
    const DateFormatter = (props) => {
        const event = new Date(props.date);
        const dateString = event.toLocaleDateString();
        return <>{dateString}</>;
    };

    return (
        <AnimationWrapper>
            <main>
                {posts.map((post) => (
                    <div key={post._id}>
                        <h2 className={styles.post_header}>{post.title}</h2>
                        <div className={styles.postErrata}>
                            <p>
                                <DateFormatter date={post.created_at} />
                            </p>
                        </div>
                        <TiptapDisplay content={post.body} />
                    </div>
                ))}
            </main>
        </AnimationWrapper>
    );
};

export async function getStaticProps(context) {
    const posts = await getPosts();
    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}
export default blogIndex;
