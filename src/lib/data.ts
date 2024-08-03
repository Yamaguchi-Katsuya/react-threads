import { IThread } from "./interface";

export function getThreads(setThreads: (threads: IThread[]) => void): void {
    fetch(import.meta.env.VITE_THREADS_API_BASE_URL + "/threads")
        .then((res) => res.json())
        .then((json) => setThreads(json))
        .catch((err) => console.error(err));
}
