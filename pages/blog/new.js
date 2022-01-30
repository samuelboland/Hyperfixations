//import { newPost } from '../api/mongoDB_posts';
import React from 'react';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('Not Submitted');

    const handleSubmit = async (e) => {
        const newPost = { title: title, body: body };
        e.preventDefault();
        try {
            let res = await fetch('/api/mongoDB_posts', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });
            if (res.status === 200) {
                setTitle('');
                setBody('');
                setMessage('Post Created');
            } else {
                setMessage('Something went wrong');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const { data: session } = useSession();
    if (session) {
        return (
            <div>
                <h1> New Post </h1>
                <h2>{message}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        placeholder="title"
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    <input
                        type="text"
                        value={body}
                        placeholder="body"
                        onChange={(e) => setBody(e.target.value)}
                    ></input>
                    <button type="submit">Create</button>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
        );
    } else {
        return (
            <>
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in</button>
            </>
        );
    }
};

export default create;
