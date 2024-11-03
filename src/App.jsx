import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Header from "./Components/Header/Header";

import Home from "./pages/Home";

import About from "./pages/About";

import Vans from "./pages/Vans";

import "../server"

import VanDetail from "./pages/VanDetail";

import Layout from "./Components/Layout/Layout";

import HostLayout from "./pages/HostLayout";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Reviews from "./pages/Reviews";
import HostVans from "./pages/HostVans/HostVans";
import HostVan from "./pages/HostVanDetails/HostVan";

import HostVanDetails from "./pages/HostVanDetails";

import HostVanPhotos from "./pages/HostVanPhotos";

import HostVanPricing from "./pages/HostVanPricing";


const App = () => {

  return (

   
     <BrowserRouter>
                
     <Routes>
     
     <Route element = {<Layout />}> 

     <Route index element = {<Home />} />
     
     <Route path="about" element = {<About />} />
     
     <Route path="vans" element = {<Vans />} />

     <Route path = "vans/:id" element = {<VanDetail />} />

     <Route path= "host" element = {<HostLayout />}>
     
      <Route index element = {<Dashboard />} />

      <Route path = "income" element = {<Income />} />

      <Route path  = "reviews" element = {<Reviews />} />

      <Route path = "vans" element = {<HostVans />} />

      <Route path = "vans/:id" element = {<HostVan />}>
       <Route index element = {<HostVanDetails />} />
       <Route path = "pricing" element = {<HostVanPricing />} />
       <Route path = "photos" element = {<HostVanPhotos />} />
       </Route>
     </Route>
     </Route>     
     </Routes>
     
     </BrowserRouter>


  )



}

export default App