import React from 'react'
import './App.css'
import LatestThreads from './components/LatestThreads'

function App(): React.JSX.Element {
  return (
    <>
      <main className='w-full m-auto'>
        <LatestThreads />
      </main>
    </>
  )
}

export default App
