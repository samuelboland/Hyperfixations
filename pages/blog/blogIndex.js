import AnimationWrapper from '../../components/AnimationWrapper';
import { getPosts } from '../api/mongoDB_posts';
import { React, useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import TiptapDisplay from '../../components/TipTapDisplay';

import styles from './blog.module.scss';

const blogIndex = ({ posts }) => {
    const [message, setMessage] = useState('');
    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            let res = await fetch('/api/mongoDB_posts', {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id),
            });
            if (res.status === 200) {
                setTitle('');
                setBody('');
                setMessage('Post Deleted');
            } else {
                setMessage('Something went wrong');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AnimationWrapper>
            <main>
                {posts.map((post) => (
                    <div key={post._id}>
                        <h2 className={styles.post_header}>{post.title}</h2>
                        <TiptapDisplay content={post.body} />

                        <RequireAuth>
                            <button onClick={(e) => handleDelete(e, post._id, posts)}>
                                Delete
                            </button>
                        </RequireAuth>
                        {message}
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
