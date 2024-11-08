import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

import { FaUserCircle } from "react-icons/fa";

const Header = () => {

   return (
    <header>
    <NavLink end className = {({isActive}) => {

       return (isActive)?("active-link site-logo"):("inactive-link site-logo")


    }} to="/">#VanLife</NavLink>
    <nav>
      <NavLink className={({isActive}) => {

             return (isActive)?("active-link"):("inactive-link")

      }}  to="/host">Host</NavLink>
      <NavLink className={({isActive}) => {

          return (isActive)?("active-link"):("inactive-link")
     

      }}  to="/about">About</NavLink>
      <NavLink className={({isActive}) => {

         return (isActive)?("active-link"):("inactive-link")

      }} to="/vans">Vans</NavLink>

      <NavLink to="/login"><FaUserCircle /></NavLink>
    </nav>
    </header>
   )

}

export default Header