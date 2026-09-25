// useRef is a hook used to ref a DOM element
import React, { useRef } from 'react'

function Basic() {
   const inputRef = useRef(null)
   function focusInput() {
      inputRef.current.focus()
   }
   return (
      <div>
         <input type="text" ref={inputRef} />
         <button onClick={focusInput}>Start Filling</button>
      </div>
   )
}

export default Basic