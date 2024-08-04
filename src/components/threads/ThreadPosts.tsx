import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../lib/interface';
import { getThreadPosts } from '../../lib/data';
import Form from '../../ui/threads/post/Form';
import Posts from '../../ui/threads/post/Posts';
import Heading from '../../ui/Heading';
import ErrorMessage from '../../ui/ErrorMessage';

export default function ThreadPosts(): React.JSX.Element {
  const { threadId } = useParams<{ threadId: string }>();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (threadId) {
      getThreadPosts(
        threadId,
        (posts) => setPosts(posts),
        (error) => setErrorMessage(`エラー: ${error}`)
      );
    }
  }, [threadId]);

  return (
    <>
      {threadId ? (
        <section className="w-1/2 mx-auto mt-10 flex flex-col gap-3 justify-center items-center">
          <Heading heading='投稿一覧' />
          <ErrorMessage message={errorMessage} />
          <Form threadId={threadId} setPosts={setPosts} />
          <Posts posts={posts} />
        </section>
      ) : (
        <div>スレッドIDが見つかりません。</div>
      )}
    </>
  );
};
