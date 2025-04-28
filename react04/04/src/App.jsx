import React, { useState } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [num, setNum] = useState(false);
  const [ch, setCh] = useState(true);
  const [Password, setPassword] = useState("");

  return (
    <>
      <h1 className='font-bold text-white text-3xl text-center mt-4'>Password Generator</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 text-black bg-gray-700 h-[180px]'>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4 bg-amber-50 mt-5'>
          <input 
            type="text" 
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
          />
        </div>
      </div>
    </>
  );
}

export default App;

