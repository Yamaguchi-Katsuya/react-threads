import { IThread } from "./interface";

export function getThreads(setThreads: (threads: IThread[]) => void): void {
    fetch(import.meta.env.VITE_THREADS_API_BASE_URL + "/threads")
        .then((res) => res.json())
        .then((json) => setThreads(json))
        .catch((err) => console.error(err));
}

export function createThread(
    title: string,
    onSuccess: () => void,
    onError: (errorMessage: string) => void
): void {
    fetch(import.meta.env.VITE_THREADS_API_BASE_URL + "/threads", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then((json) => {
            console.log(json);
            onSuccess();
        })
        .catch((err) => {
            console.error(err);
            onError(err.message);
        });
}
