import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";

import { useNavigate } from "react-router-dom";

import Spinner from "./Spinner/Spinner";


const ProtectedRoute = ({children}) => {

   const {isAuthenticated} = useAuth()
   const navigate = useNavigate()

   useEffect(() => {

     if(!isAuthenticated)
        navigate("/login")

   },[isAuthenticated])
  

   if(!isAuthenticated)
    return <Spinner />


   return children


}

export default ProtectedRoute