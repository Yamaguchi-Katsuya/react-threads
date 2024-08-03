import React from "react";

export default function Post({ post }: { post: string }): React.JSX.Element {
    return (
        <>
            <li className="w-full py-2 list-none border border-solid border-black">{post}</li>
        </>
    )
}
