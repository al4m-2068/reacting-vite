import React from 'react'
import { Link, NavLink } from 'react-router'
import NavigationBar from './Navigation'

function RealProfile() {
   return (
      <>
      <NavigationBar/>
      <div className='flex flex-col justify-end h-screen p-4'>
         <h1 className='text-7xl uppercase font-black'>Our Profile,</h1>
         <h2 className='text-sm lowercase'>Established in lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati?</h2>
      </div>
      </>
   )
}

export default RealProfile