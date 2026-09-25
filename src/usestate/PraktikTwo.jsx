import React, { useState } from 'react'

function PraktikTwo() {
   const [changeName, setChangeName] = useState('Ali')
   return (
      <>
         <div>{changeName}</div>
         <button onClick={() => setChangeName('Fulan')}>Change Name</button>
      </>
   )
}

export default PraktikTwo