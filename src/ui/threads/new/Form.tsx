import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createThread } from "../../../lib/data";
import TextField from "../../TextField";
import ErrorMessage from "../../ErrorMessage";

export default function Form(): React.JSX.Element {
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
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 w-full">
            <TextField
                label="タイトル"
                name="title"
                value={title}
                setValue={setTitle}
            />
            <ErrorMessage message={errorMessage} />
            <button type="submit" className="text-lg w-1/5 border border-black rounded-full">作成</button>
        </form>
    );
}
