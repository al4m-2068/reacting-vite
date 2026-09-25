import { ArrowRightIcon } from '@phosphor-icons/react'
import React from 'react'

// Uncontrolled (by React) = elements manipulated by DOM, not React States
function LoginForm() { 
   const handlerSubmit = (event) => {
      event.preventDefault()
      console.log(event.target.elements.username.value);
      // The 'elements' used to access all elements in the event. 
      console.log(event.target.elements.password.value);
   }
   return (
      <div>
         <h1>Log in to continue your Journey!</h1>
         <form onSubmit={handlerSubmit}>
            <input type="text" name='username' />
            <input type="password" name='password' />
            <button type="submit">Log in <ArrowRightIcon size={12}/></button>
         </form>
      </div>
   )
}

export default LoginForm