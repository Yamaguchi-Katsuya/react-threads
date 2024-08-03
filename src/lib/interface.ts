export interface IThread {
    id: number;
    title: string;
}
export interface IPost {
    id: string;
    post: string;
}

export interface IThreadPostsResponse {
    threadId: string;
    posts: IPost[];
}
