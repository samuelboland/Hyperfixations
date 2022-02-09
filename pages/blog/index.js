import AnimationWrapper from '../../components/AnimationWrapper';
import { getPosts } from '../api/mongoDB_posts';
import { React, useState } from 'react';
import TiptapDisplay from '../../components/TiptapDisplay';
import { AiOutlineDelete } from 'react-icons/ai';

import styles from './blog.module.scss';

const blogIndex = ({ posts }) => {
    // My initial implementation of the delete button did not ask for confirmation. I don't want
    // to accidentally delete my post by clicking once in the wrong place,
    // so I added this ConfirmationButton component.
    const ConfirmationButton = (props) => {
        const [confirm, setConfirm] = useState(false);

        if (confirm === false) {
            return (
                <button onClick={(e) => setConfirm(true)}>
                    <AiOutlineDelete />
                </button>
            );
        } else {
            return (
                <button
                    onClick={(e) => {
                        handleDelete(e, props.post._id);
                    }}
                >
                    <AiOutlineDelete /> Are you sure?
                </button>
            );
        }
    };

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
                setMessage('Post Deleted');
            } else {
                setMessage('Something went wrong');
            }
        } catch (err) {
            console.log(err);
        }
    };

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
                            <ConfirmationButton post={post} />
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
