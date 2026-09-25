import React, { useContext } from 'react'
import { AboutContext } from './Context'

function About() {
   const {title, setTitle} = useContext(AboutContext)
   return (
      <div className='text-blue-400 bg-[#0c0c0c] flex flex-col gap-2 container mx-auto p-4 h-full items-start'>
         <span className='text-sm uppercase tracking-widest'>About page</span>
         <h1 className='text-2xl font-bold'>{title}</h1>
         <button onClick={() => setTitle("Albar's Page")}>Change Title</button>
      </div>
   )
}

export default About