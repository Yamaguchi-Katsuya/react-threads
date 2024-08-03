import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../lib/interface';
import { getThreadPosts } from '../../lib/data';
import Post from '../../ui/Post';

export default function ThreadPosts(): React.JSX.Element {
  const { thread_id } = useParams<{ thread_id: string }>();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (thread_id) {
      getThreadPosts(
        thread_id,
        (posts) => setPosts(posts),
        (error) => setErrorMessage(`エラー: ${error}`)
      );
      console.log(posts);
    }
  }, [thread_id]);

  return (
    <section className="w-1/2 mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
      <h2 className="text-center text-3xl">投稿一覧</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}

      {posts.length > 0 ? (
        <ul>
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
