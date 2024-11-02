import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Host.css"



const HostLayout = () => {


   return (
    <>
     <h1>This is a host page</h1>

     <nav className="host-nav">
     
     <NavLink end className={({isActive}) => {

          return (isActive)?("active-link"):("inactive-link")

     }}  to="/host">Dashboard</NavLink>

     <NavLink className={({isActive}) => {

        return (isActive)?("active-link"):("inactive-link")

     }} to="/host/income">Income</NavLink>
     <NavLink to="/host/vans" className={({isActive}) => {

         return (isActive)?("active-link"):("inactive-link")

     }}>Vans</NavLink>
     <NavLink className={({isActive}) => {

         return (isActive)?("active-link"):("inactive-link")

     }}  to="/host/reviews">Reviews</NavLink>

     </nav>

     <Outlet />

     </>

   )


}

export default HostLayout