import React, { useContext } from 'react'
import { AboutContext } from './Context'

function Contact() {
   const {title} = useContext(AboutContext)
   return (
      <div className='text-blue-400 bg-[#0c0c0c] flex flex-col gap-2 container mx-auto p-4 h-full items-start'>
         Title from about: {title}
      </div>
   )
}

export default Contact