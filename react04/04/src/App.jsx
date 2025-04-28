import React, { useCallback, useState } from "react";

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
		for (let i = 1; i <= length; i++) {
			let index = Math.floor(Math.random() * str.length + 1);
			pas += str[index];
		}
		setPassword(pas);
	}, [length, num, ch, setPassword]);

	return (
		<>
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 text-black bg-gray-700 h-[250px] mt-4">
				<h1 className="font-bold text-white text-xl text-center ">
					Password Generator
				</h1>

				<div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-amber-50 mt-4">
					<input
						type="text"
						value={Password}
						className="outline-none w-full py-1 px-3"
						placeholder="password"
						
					/>
				</div>

				<button
					className="outline-none bg-blue-400 text-white font-bold px-4 py-2 rounded-lg cursor-pointer shrink-0"
					onClick={() => navigator.clipboard.writeText(Password)}
				>
					Copy
				</button>
				<div>
					<div>
						<input
							type="range"
							min={1}
							max={10}
							value={length}
							className="cursor-pointer"
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label className="text-white font-bold ml-3">Length:{length}</label>
					</div>
				</div>
				<div>
					<div>
						<input
							type="checkbox"
							defaultChecked={num}
							id="numberInput"
							onChange={() => {
								setNum((prev) => !prev);
							}}
						/>
						<label className="font-bold ml-2 text-white" htmlFor="numberInput">
							Numbers
						</label>
					</div>
				</div>
				<div>
					<div>
						<input
							type="checkbox"
							defaultChecked={ch}
							id="chInput"
							onChange={() => {
								setNum((prev) => !prev);
							}}
						/>
						<label className="font-bold ml-2 text-white" htmlFor="chInput">
							Character
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
