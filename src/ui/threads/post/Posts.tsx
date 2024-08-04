import { IPost } from "../../../lib/interface";
import Post from "./Post";

export default function Posts({ posts }: { posts: IPost[] }): React.JSX.Element {
    return (
        <>
            {posts.length > 0 ? (
                <ul className="border border-solid border-black text-center text-base w-full">
                    {posts.map((post) => (
                        <Post key={post.id} post={post.post} />
                    ))}
                </ul>
            ) : (
                <p className="text-base">投稿がありません。</p>
            )}
        </>
    );
}
