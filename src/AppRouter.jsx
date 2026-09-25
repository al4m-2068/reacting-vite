import React from 'react'
import { RouterProvider } from 'react-router'
import { pages } from './router'

function AppRouter() {
  return (
    <>
    {/* RouterProvider is considered to be added in App.jsx, not main.jsx */}
    <RouterProvider router={pages}/>
    </>
  )
}

export default AppRouter