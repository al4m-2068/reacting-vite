// Entry I [25/8/226]: with ust. Izra Novan
import { Toast } from 'radix-ui/toast';
import React, { useEffect, useState } from 'react'

function Basic() {
   const [counter, setCounter] = useState(0)
   // Function: to run a 'side Effect/s' if a state changes within a scope
   // two parameters needed are: (function, dependencies) 
   useEffect(() => {
      if (counter > 0) alert(`Counter berubah dari ${counter - 1} ke ${counter}`)
      // The 'side Effect/s' goes here
      console.log(`Count changed to: ${counter}`);
      setTimeout(() => {
         console.log('Cleaning >>>>> Cleaning')
      }, 2000)

      // OPTIONAL: Cleanup Function
      return () => {
         clearTimeout()
         console.log('OB Message: Effect stopped succesfully')
      }
   }, /* deps should be added even if it's empty, or not it'll run forever and cause unwanted errors! */[
      // if empty, it'll run once after render then shuts down the useEffect
      // if filled with values, it'll watch for changes on those values and run the useEffect once more
      counter
   ]);
   return (
      <div className='h-screen flex flex-col items-center justify-center'>
         <p>Count: {counter}</p>
         <span className='*'>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
         </span>
      </div>
   )
}

export default Basic