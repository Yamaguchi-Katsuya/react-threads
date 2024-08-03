import React, { useEffect, useState } from "react"
import Thread from "../ui/Thread"
import { getThreads } from "../lib/data";
import { IThread } from "../lib/interface";

export default function LatestThreads(): React.JSX.Element {
    const [threads, setThreads] = useState<IThread[]>([]);
    useEffect(() => {
        getThreads(setThreads);
    }, []);

    return (
        <>
            <section className="w-1/2 mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
                <h1 className="text-center text-3xl">新着スレッド</h1>
                <ul className="border border-solid border-black text-center text-base w-full">
                    {threads.map((thread) => (
                        <Thread key={thread.id} thread={thread.title} />
                    ))}
                </ul>
            </section>
        </>
    )
}
