import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";


import "./Layout.css"

const Layout = () => {


  return (

     <div className="layout-page-wrapper">
     <Header />
     <main>
     <Outlet />
     </main>
     <Footer />
     </div>

  )


}

export default Layout