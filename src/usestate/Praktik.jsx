import React, { useState } from 'react'

function Praktik() {
   const [count, setCount] = useState(0)
   function plus() {
      return setCount(count + 1)
   }
   function plusTwo() {
      return setCount(count + 1)
   }
  return (
   <>
      <h1 className='text-9xl/tight tracking-tight font-bold uppercase inline'>Nilai: {count}</h1>
      <button className='cursor-pointer px-10 py-5 hover:bg-blue-400 hover:text-white border' onClick={plus}>+</button>
      <button onClick={plusTwo}>+2</button>
      <button onClick={() => setCount(count + 3)}>+3</button>
   </>
  )
}

export default Praktik