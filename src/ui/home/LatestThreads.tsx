import { Link } from "react-router-dom";
import { IThread } from "../../lib/interface";
import Thread from "./Thread";

export default function LatestThreads({ threads }: { threads: IThread[] }): React.JSX.Element {
    return (
        <>
            <ul className="border border-solid border-black text-center text-base w-full">
                {threads.map((thread) => (
                    <Link key={thread.id} to={`/threads/${thread.id}`}>
                        <Thread thread={thread.title} />
                    </Link>
                ))}
            </ul>
        </>
    );
}
