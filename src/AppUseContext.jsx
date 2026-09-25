import React, { useState } from 'react'
import Home from './usecontext/Home'
import About from './usecontext/About'
import { AboutContext } from './usecontext/Context'
import Contact from './usecontext/Contact'
import Testimoni from './usecontext/Testimoni'

const testimonials = [
   {
      nama: 'Wahid',
      pesan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, enim?',
   },
   {
      nama: 'Itsnani',
      pesan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, enim?',
   },
   {
      nama: 'Tsalatsah',
      pesan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, enim?',
   },
]
function AppUseContext() {
   const [title, setTitle] = useState('AboutTitle Default')
   return (
      <div className='h-screen flex flex-col'>
         AppUseContext
         <Home/>
         <AboutContext.Provider value={{title, setTitle, testimonials}}>
            <About/>
            <Contact/>
            <Testimoni/>
         </AboutContext.Provider>
      </div>
   )
}

export default AppUseContext