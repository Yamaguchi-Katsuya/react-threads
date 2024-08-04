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

export interface ITextField {
    label: string;
    name: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}
