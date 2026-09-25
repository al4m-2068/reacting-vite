import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppUseState from './AppUseState.jsx'
import AppUseRef from './AppUseRef.jsx'
import AppForms from './AppForms.jsx'
import RadixPrimitives from './stylecomponents/RadixPrimitives.jsx'
import "@radix-ui/themes/styles.css";
import RadixThemes from './stylecomponents/RadixThemes.jsx'
import { Theme } from '@radix-ui/themes'
import AppUseEffect from './AppUseEffect.jsx'
import { RouterProvider } from 'react-router'
import { pages, pagesZus } from './router.jsx'
import AppRouter from './AppRouter.jsx'
import AppUseContext from './AppUseContext.jsx'
import AppUseReducer from './AppUseReducer.jsx'
// use 'as' to change import name
// ex.: import App as Utils from './App.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      {/* <Theme> */}
         {/* <AppUseEffect/> */}
         {/* <RouterProvider router={pages}/> not recommended*/}
         {/* <AppRouter/> */}
         {/* <AppUseContext/> */}
         {/* <AppUseReducer/> */}
      {/* </Theme> */}
      <RouterProvider router={pagesZus}/>
   </StrictMode>,
)
