import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div className='w-full min-h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div
            className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl font-bold border-3 border-red-600 text-red-600 mr-4 cursor-pointer'
            onClick={() => setColor('red')}
          >
            red
          </div>
          <div
            className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl border-3 font-bold border-green-600 text-green-600 mr-4 cursor-pointer'
            onClick={() => setColor('green')}
          >
            green
          </div>
          <div
            className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl border-3 border-purple-600 mr-4 font-bold text-purple-600 cursor-pointer'
            onClick={() => setColor('purple')}
          >
            purple
          </div>
          <div
            className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl border-3 font-bold text-blue-500 cursor-pointer'
            onClick={() => setColor('blue')}
          >
            blue
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
