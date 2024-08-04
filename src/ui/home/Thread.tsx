import React from "react";

export default function Thread({ thread }: { thread: string }): React.JSX.Element {
    return (
        <>
            <li className="py-2 list-none border-b-2">{thread}</li>
        </>
    )
}
