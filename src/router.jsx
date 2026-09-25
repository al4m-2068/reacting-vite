import { createBrowserRouter } from "react-router";
import RealHome from "./reactrouter/RealHome";
import RealProfile from "./reactrouter/RealProfile";
import NotFound from "./reactrouter/NotFound";
import ProfileDetail from "./reactrouter/ProfileDetail";
import UserTheme from "./zustand/pages/user/Theme";
import DashboardUser from "./zustand/pages/user/Dashboard";
import ProfileUser from "./zustand/pages/user/MyProfile";
import SignIn from "./zustand/auth/SignIn";
import AdminTheme from "./zustand/pages/admin/Theme";
import DashboardAdmin from "./zustand/pages/admin/Dashboard";
import ProfileAdmin from "./zustand/pages/admin/MyProfile";

export const pages = createBrowserRouter([
   {
      path: '',
      element: <RealHome/>
   },
   {
      path: '/profile',
      element: <RealProfile/>
   },
   {
      path: '*',
      element: <NotFound/>
   },
   {
      path: '/profile/:id',
      element: <ProfileDetail/>
   }
])

export const pagesZus = createBrowserRouter([
   {
      path: '/sign-in',
      element: <SignIn/>
   },
   {
      path: 'user',
      element: <UserTheme/>,
      children: [
         {index: true, element: <DashboardUser/>},
         {path: 'profile', element: <ProfileUser/>},
      ]
   },
   {
      path: 'admin',
      element: <AdminTheme/>,
      children: [
         {index: true, element: <DashboardAdmin/>},
         {path: 'profile', element: <ProfileAdmin/>},
      ]
   },
])