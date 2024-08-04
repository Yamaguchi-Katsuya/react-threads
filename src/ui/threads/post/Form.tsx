import React, { useState } from "react";
import { IPost } from "../../../lib/interface";
import { createPost, getThreadPosts } from "../../../lib/data";
import TextField from "../../TextField";
import ErrorMessage from "../../ErrorMessage";

export default function Form(
    { threadId, setPosts }: {
        threadId: string,
        setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
    }
): React.JSX.Element {
    const [post, setPost] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setErrorMessage('');

        createPost(threadId, post,
            () => {
                getThreadPosts(threadId,
                    (posts) => setPosts(posts),
                    (error) => setErrorMessage(`エラー: ${error}`)
                );
                setPost('');
            },
            (error) => setErrorMessage(`エラー: ${error}`)
        );
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-full">
            <TextField
                label="投稿"
                name="post"
                value={post}
                setValue={setPost}
            />
            <ErrorMessage message={errorMessage} />
            <button type="submit" className="text-lg w-1/5 border border-black rounded-full">投稿</button>
        </form>
    )
}
