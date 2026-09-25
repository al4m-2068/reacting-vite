import React from 'react'
import { NavLink } from 'react-router'

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found.</p>
      <NavLink to={'/'}>To Homepage →</NavLink>
    </div>
  )
}

export default NotFound