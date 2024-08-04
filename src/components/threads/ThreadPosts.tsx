import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../lib/interface';
import { createPost, getThreadPosts } from '../../lib/data';
import Post from '../../ui/Post';

export default function ThreadPosts(): React.JSX.Element {
  const { thread_id } = useParams<{ thread_id: string }>();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (thread_id) {
      getThreadPosts(
        thread_id,
        (posts) => setPosts(posts),
        (error) => setErrorMessage(`エラー: ${error}`)
      );
    }
  }, [thread_id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    if (thread_id) {
      createPost(
        thread_id,
        post,
        () => {
          getThreadPosts(
            thread_id,
            (posts) => setPosts(posts),
            (error) => setErrorMessage(`エラー: ${error}`)
          );
          setPost('');
        },
        (error) => setErrorMessage(`エラー: ${error}`)
      );
    } else {
      setErrorMessage('スレッドIDが見つかりません。');
    }
  };

  return (
    <section className="w-1/2 mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
      <h2 className="text-center text-3xl">投稿一覧</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
        <div className='grid grid-cols-5 gap-1 text-lg'>
          <label htmlFor="title" className='col-span-2'>投稿</label>
          <input
            type="text"
            id="post"
            className='col-span-3'
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="投稿を入力してください"
          />
        </div>
        {errorMessage && <p className="text-red-600 text-base">{errorMessage}</p>}
        <button type="submit" className='text-lg w-1/5 border border-black rounded-full '>投稿</button>
      </form>

      {posts.length > 0 ? (
        <ul className="border border-solid border-black text-center text-base w-full">
          {posts.map((post) => (
            <Post key={post.id} post={post.post} />
          ))}
        </ul>
      ) : (
        <p className='text-base'>投稿がありません。</p>
      )}
    </section>
  );
};
