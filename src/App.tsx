import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NewThread from './components/threads/NewThread';
import ThreadPosts from './components/threads/ThreadPosts';
import Home from './components/Home';

function App(): React.JSX.Element {
  return (
    <main className="w-full m-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<NewThread />} />
        <Route path="/threads/:threadId" element={<ThreadPosts />} />
      </Routes>
    </main>
  );
}

export default App;
