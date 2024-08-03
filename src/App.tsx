import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LatestThreads from './components/LatestThreads';
import NewThread from './components/threads/NewThread';

function App(): React.JSX.Element {
  return (
    <Router>
      <main className="w-full m-auto">
        <Routes>
          <Route path="/" element={<LatestThreads />} />
          <Route path="/threads/new" element={<NewThread />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
