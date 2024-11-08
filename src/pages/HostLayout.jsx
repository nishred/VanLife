import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Host.css"

const HostLayout = () => {

   return (

    <div className="host-van-container-wrapper">
     <h1>This is a host page</h1>

     <nav className="host-nav">
     
     <NavLink end className={({isActive}) => {

          return (isActive)?("active-link"):("inactive-link")

     }}  to=".">Dashboard</NavLink>

     <NavLink className={({isActive}) => {

        return (isActive)?("active-link"):("inactive-link")

     }} to="income">Income</NavLink>
     <NavLink to="vans" className={({isActive}) => {

         return (isActive)?("active-link"):("inactive-link")

     }}>Vans</NavLink>
     <NavLink className={({isActive}) => {

         return (isActive)?("active-link"):("inactive-link")

     }}  to="reviews">Reviews</NavLink>

     </nav>

     <Outlet />

     </div>

   )

}

export default HostLayout