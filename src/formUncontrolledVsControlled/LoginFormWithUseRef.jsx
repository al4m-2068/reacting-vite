import React, { useRef } from 'react'

function LoginFormWithUseRef() {
   const usernameRef = useRef(null)
   function handlerSubmit(e) {
      e.preventDefault()
      console.log(usernameRef.current);
      
   }
   return (
      <div>
         <h1>Log in to continue your Journey!</h1>
         <form onSubmit={handlerSubmit}>
            <input type="text" ref={usernameRef}/>
            <input type="password" name='password' />
            <button type="submit">Log in <ArrowRightIcon size={12}/></button>
         </form>
      </div>
   )
}

export default LoginFormWithUseRef