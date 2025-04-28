import React, { useState } from 'react'
//import './App.css'

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      {/* Use min-h-screen to ensure full screen height */}
      <div className='w-full min-h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl '>
            test
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
