import React, { createContext, useContext, useState } from 'react'
import ProfileDetail from './ProfileDetail'
import { HomeContext } from './Context'
import Profile from './Profile'
function Home() {
   // const name = useContext(HomeContext)
   const [nama, setNama] = useState('Fulan')
   const namae = 'Fulanee'
   return (
      <>
      <div /* className='text-blue-400 bg-[#0c0c0c] flex flex-col gap-2 container mx-auto p-4 h-full items-start'*/>
         {/* <HomeContext.Provider value={name}>
            <ProfileDetail/>
         </HomeContext.Provider> */}
         Ini adalah Home
      </div>
      <HomeContext.Provider value={{nama, setNama}}>
         <Profile />
      </HomeContext.Provider>
      </>
   )
}

export default Home