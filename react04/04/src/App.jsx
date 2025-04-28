import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [num, setNum] = useState(false);
  const [ch, setCh] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pas = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (num) str += "0123456789";
    if (ch) str += "@#$%&";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pas += str[index];
    }
    setPassword(pas);
  }, [length, num, ch]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, ch, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 text-black bg-gray-700 h-[340px] mt-4">
        <h1 className="font-bold text-white text-xl text-center mt-2">
          Password Generator
        </h1>

        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-amber-50 mt-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <button
            className="outline-none bg-blue-400 text-white font-bold px-4 py-2 rounded-lg cursor-pointer shrink-0"
            onClick={() => {
              navigator.clipboard.writeText(Password);
              alert("copied");
            }}
            
          >
            Copy
          </button>
        </div>

        <div className="mb-2">
          <input
            type="range"
            min={1}
            max={30}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white font-bold ml-3">Length: {length}</label>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={num}
            id="numberInput"
            onChange={() => setNum((prev) => !prev)}
          />
          <label className="font-bold text-white" htmlFor="numberInput">
            Numbers
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={ch}
            id="charInput"
            onChange={() => setCh((prev) => !prev)}
          />
          <label className="font-bold text-white" htmlFor="charInput">
            Special Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
