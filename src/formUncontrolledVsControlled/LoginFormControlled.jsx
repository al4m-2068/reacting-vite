import React, { useState } from 'react'

function LoginFormControlled() {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [phone, setPhone] = useState('')

   // function phoneSet(e) {
   //    setPhone(e.target.value)
   //    setPhone(e.target.value)
   // }
   return (
      <div>
         <h1>Log in to continue your Journey!</h1>
         <form onSubmit={handlerSubmit}>
            <input type="text" name='username' value={username} onChange={(e) => {
               setUsername(e.target.value)
               console.log(e.target.value)
            }}/>
            <input type="password" name='password' value={password} onChange={(e) => {
               setPassword(e.target.value)
               console.log(e.target.value)
            }}/>
            <input type="number" name='phone' value={phone} onChange={phoneSet}/>
            <button type="submit">Log in <ArrowRightIcon size={12}/></button>
         </form>

         <h1>Hello there, {username}!</h1>
         <h1>Your password is {password}, length = {}</h1>
      </div>
   )
}

export default LoginFormControlled