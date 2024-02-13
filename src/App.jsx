import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
import Card from './components/Card';



const App = () => {
  return (
    <>
    <div className='relative w-full h-screen bg-blue-950'>
      <Background />
      <Foreground />
    </div>
    </>
  )
}

export default App