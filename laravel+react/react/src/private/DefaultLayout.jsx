import React from 'react';
import { Navigate } from "react-router-dom";
import { useStateContext } from '../context/ContextProvider';
const DefaultLayout = () => {
  const {user, token, setUser, setToken, notification} = useStateContext();

  if (!token) {
    return <Navigate to="/login"/>
  }
  return (
    <div>DefaultLayout</div>
  )
}

export default DefaultLayout
