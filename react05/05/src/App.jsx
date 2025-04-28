import React from 'react'
import { Input } from '../components'
import { useState } from 'react'
import useCurrencyInfo from './../hooks/useCurrencyInfo'

function App() {
 
  const [from,setFrom]=useState("inr");
  const [to,setTo]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState(0);
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  return (
    <>
      <h1 className='font-bold text-blue-600'> Curreny Conveter</h1>
     
    </>
  )
}

export default App
