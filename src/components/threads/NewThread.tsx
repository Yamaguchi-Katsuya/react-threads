import React, { useState } from 'react';
import { createThread } from '../../lib/data';
import { useNavigate } from 'react-router-dom';

export default function NewThread(): React.JSX.Element {
    const [title, setTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setErrorMessage('');

        createThread(
            title,
            () => navigate('/'),
            (error) => setErrorMessage(`エラー: ${error}`)
        );

    };

    return (
        <section className="w-1/2 mx-auto mt-10 flex flex-col gap-5 justify-center items-center">
            <h2 className='text-3xl'>新規作成</h2>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
                <div className='grid grid-cols-5 gap-1 text-lg'>
                    <label htmlFor="title" className='col-span-2'>タイトル</label>
                    <input
                        type="text"
                        id="title"
                        className='col-span-3'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="投稿を入力してください"
                    />
                </div>
                {errorMessage && <p className="text-red-600 text-base">{errorMessage}</p>}
                <button type="submit" className='text-lg w-1/5 border border-black rounded-full '>投稿</button>
            </form>
        </section>
    );
};
