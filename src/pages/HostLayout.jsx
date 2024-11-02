import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Host.css"


const HostLayout = () => {


   return (


    <>
     <h1>This is a host page</h1>

     <nav className="host-nav">
     
     <Link to="/host/">Dashboard</Link>
     <Link to="/host/income">Income</Link>
     <Link>Vans</Link>
     <Link to="/host/reviews">Reviews</Link>

     </nav>

     <Outlet />

     </>

   )


}

export default HostLayout