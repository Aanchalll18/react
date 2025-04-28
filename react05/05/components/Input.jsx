import React from "react";
import { useId } from "react";

const Input = ({
	label,
	amount,
	onAmountchange, 
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = "inr",
	amountDisable = false,
	currencyDisable = false,
	className = "",
	placeholder = "Amount", 
}) => {
    const amountId=useId()

	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
			{/* Amount input */}
			<div className="w-1/2">
				<label 
                htmlFor={amountId}
                className="text-black/40 mb-2 inline-block">{label}</label>
				<input
                    id={amountId}
					className="outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder={placeholder}
					value={amount} 
					onChange={(e) => onAmountchange && onAmountchange(e.target.value)} 
					disabled={amountDisable} 
				/>
			</div>

			{/* Currency selector */}
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select
					className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
					value={selectCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Update the selected currency
					disabled={currencyDisable} // Disable currency selector if necessary
				>
					{currencyOptions &&
						currencyOptions.map((currency, index) => (
							<option key={index} value={currency}>
								{currency}
							</option>
						))}
				</select>
			</div>
		</div>
	);
};

export default Input;
