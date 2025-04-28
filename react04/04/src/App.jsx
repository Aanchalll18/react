
// import React, { useState } from 'react';

// function App() {
//   const [length, setLength] = useState(10);
//   const [num, setNum] = useState(false);
//   const [ch, setCh] = useState(true);
//   const [Password, setPassword] = useState("");

//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 text-black bg-gray-700 h-[180px] mt-4'>
        
//       <h1 className='font-bold text-white text-xl text-center '>Password Generator</h1>
//         <div className='flex shadow-md rounded-lg overflow-hidden mb-4 bg-amber-50 mt-4'>
//           <input 
//             type="text" 
//             value={Password}
//             className='outline-none w-full py-1 px-3'
//             placeholder='password'
//             readOnly
//           />
//           <button className='outline-none bg-blue-400 text-white font-bold cursor-pointer '>
//             copy
//           </button>
//         </div>

//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [num, setNum] = useState(false);
  const [ch, setCh] = useState(true);
  const [Password, setPassword] = useState("");

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 text-black bg-gray-700 h-[180px] mt-4'>
        
        <h1 className='font-bold text-white text-xl text-center '>Password Generator</h1>
        
        {/* Container for password input */}
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4 bg-amber-50 mt-4'>
          <input 
            type="text" 
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
        </div>

        {/* Copy button */}
        <div className="flex justify-center">
          <button 
            className='outline-none bg-blue-400 text-white font-bold px-4 py-2 rounded-lg cursor-pointer'
            onClick={() => navigator.clipboard.writeText(Password)}
          >
            Copy
          </button>
        </div>
        
      </div>
    </>
  );
}

export default App;
