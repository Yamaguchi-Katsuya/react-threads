import React, { useEffect, useState } from "react"
import Thread from "../ui/Thread"
import { getThreads } from "../lib/data";
import { IThread } from "../lib/interface";
import { Link } from "react-router-dom";

export default function LatestThreads(): React.JSX.Element {
    const [threads, setThreads] = useState<IThread[]>([]);
    useEffect(() => {
        getThreads(setThreads);
    }, []);

    return (
        <>
            <section className="w-1/2 mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
                <h2 className="text-center text-3xl">新着スレッド一覧</h2>
                <Link to="/threads/new">
                    <button>新規作成</button>
                </Link>
                <ul className="border border-solid border-black text-center text-base w-full">
                    {threads.map((thread) => (
                        <Link to={`/threads/${thread.id}`}>
                            <Thread key={thread.id} thread={thread.title} />
                        </Link>
                    ))}
                </ul>
            </section >
        </>
    )
}
