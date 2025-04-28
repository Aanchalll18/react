import React, { useState } from 'react'
//import './App.css'

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div className='w-full min-h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl font-bold border-3 border-red-600 text-red-600 mr-4'>
            red
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl border-3 font-bold border-green-600 text-green-600 mr-4'>
            green
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl border-3 border-amber-600 mr-4 font-bold text-amber-600'>
            amber
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl border-3 font-bold text-blue-500'>
            test
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
