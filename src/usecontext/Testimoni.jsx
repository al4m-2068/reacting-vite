import React, { useContext } from 'react'
import { AboutContext } from './Context'

function Testimoni() {
   const {testimonials} = useContext(AboutContext);
   return (
      <div className='text-blue-400 bg-[#0c0c0c] flex flex-col gap-2 container mx-auto p-4 h-full items-start'>
         <h1>Testimoni</h1>
         <ul>
            {testimonials.map((tst, idx) => (
               <li key={idx}>
                  <h1>{tst.nama}</h1>
                  <p>{tst.pesan}</p>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Testimoni