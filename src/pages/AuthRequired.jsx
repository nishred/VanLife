import React from "react";
import { useAuth } from "../Context/AuthProvider";

import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {

   const {isAuthenticated} = useAuth()  

   if(!isAuthenticated)
    return <Navigate to = "/login"  replace state = {{message : "You must login first"}} />

   return <Outlet />

}

export default AuthRequired