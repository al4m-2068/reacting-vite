import React from 'react'
import { NavLink } from 'react-router'

function NavigationBar() {
   return (
      <nav>
         <NavLink className={({isActive}) => isActive ? 'text-green-300' : 'text-black'} to={'/'}>Home</NavLink>
         <NavLink className={({isActive}) => isActive ? 'text-green-300' : 'text-black'} to={'/profile'}>Profile</NavLink>
         <NavLink className={({isActive}) => isActive ? 'text-green-300' : 'text-black'} to={'/profile/1'}>Profile: 1</NavLink>
      </nav>
   )
}

export default NavigationBar