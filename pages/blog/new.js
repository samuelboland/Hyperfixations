//import { newPost } from '../api/mongoDB_posts';
import React from 'react';
import { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import TiptapEdit from '../../components/TiptapEdit';

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

    return (
        <RequireAuth>
            <main>
                <h1> New Post </h1>
                <h2>{message}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        placeholder="title"
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    <TiptapEdit
                        stateHandler={(text) => {
                            setBody(text);
                        }}
                    />
                    <button type="submit">Create</button>
                    {body}
                </form>
            </main>
        </RequireAuth>
    );
};

export default create;
