import React from 'react'
import { Link, NavLink } from 'react-router'
import NavigationBar from './Navigation'

function RealHome() {
   return (
      <>
      <NavigationBar/>
      <div className='flex flex-col justify-end h-screen p-4'>
         <h1 className='uppercase text-7xl font-black'>Homepage,</h1>
         <h2 className='text-sm lowercase'>Welcome!</h2>
      </div>
      </>
   )
}

export default RealHome