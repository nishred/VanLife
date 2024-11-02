import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Header from "./Components/Header/Header";

import Home from "./pages/Home";

import About from "./pages/About";

import Vans from "./pages/Vans";

import "../server"

import VanDetail from "./pages/VanDetail";

import Layout from "./Components/Layout";

import Host from "./pages/Host";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";


const App = () => {



  return (

   
     <BrowserRouter>
                
     <Routes>
     
     <Route element = {<Layout />}>

     <Route path="/" element = {<Home />} />
     
     <Route path="/about" element = {<About />} />
     
     <Route path="/vans" element = {<Vans />} />

     <Route path = "/vans/:id" element = {<VanDetail />} />

     <Route path= "/host" element = {<Host />}>
     
      <Route path = "" element = {<Dashboard />} />

      <Route path = "/host/income" element = {<Income />} />

      <Route path  = "/host/reviews" element = {<Reviews />} />
     
     </Route>


     </Route>

     
     </Routes>
     
     </BrowserRouter>


  )



}

export default App