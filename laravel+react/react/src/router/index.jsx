import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login/Login"
import GuestLayout from "../private/GuestLayout"
import NotFound from "../pages/not_found/NotFound"
import Dashboard from "../pages/dashboard/Dashboard"
import DefaultLayout from "../private/DefaultLayout";
import SignUp from "../pages/signup/SignUp";
const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      },

    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])
export default router;
