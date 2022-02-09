//import { newPost } from '../api/mongoDB_posts';
import React from 'react';
import { useState } from 'react';
import AuthProtector from '../../components/AuthProtector';
import TiptapEdit from '../../components/TiptapEdit';

const create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('Not Submitted');

    const handleSubmit = async (e) => {
        const date = Date.now();
        const newPost = { title: title, body: body, created_at: date };
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

    const startingText = '<p><span style="color: #959493">body</span></p>';

    return (
        <AuthProtector>
            <main>
                <h1> New Post </h1>
                <h2 data-cy="postStatusMessage">{message}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        required
                        type="text"
                        value={title}
                        placeholder="title"
                        data-cy="postTitleInput"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TiptapEdit
                        stateHandler={(text) => {
                            setBody(text);
                        }}
                        content={startingText}
                        // Canot put a data-cy here. It's in
                        // the component itself instead.
                    />
                    <button type="submit" data-cy="postSubmitButton">
                        Create
                    </button>
                </form>
            </main>
        </AuthProtector>
    );
};

export default create;
