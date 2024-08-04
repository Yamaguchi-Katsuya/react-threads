import React, { useEffect, useState } from "react";
import { getThreads } from "../lib/data";
import { IThread } from "../lib/interface";
import { Link } from "react-router-dom";
import LatestThreads from "../ui/home/LatestThreads";
import Heading from "../ui/Heading";

export default function Home(): React.JSX.Element {
    const [threads, setThreads] = useState<IThread[]>([]);
    useEffect(() => {
        getThreads(setThreads);
    }, []);

    return (
        <>
            <section className="w-1/2 mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
                <Heading heading="スレッド一覧" />
                <Link to="/threads/new">
                    <button>新規作成</button>
                </Link>
                <LatestThreads threads={threads} />
            </section >
        </>
    );
}
