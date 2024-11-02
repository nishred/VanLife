import React, { useEffect,useState } from "react";
import "./HostVans.css"

import { NavLink } from "react-router-dom";

const HostVans = () => {

  const [hostVans,setHostVans] = useState(null)


   useEffect(() => {


     async function fetchHostVans()
     {

      const response = await fetch("/api/host/vans")

     const json = await response.json()

      
     setHostVans(json.vans)


     }

     fetchHostVans()


   },[])
 

   if(hostVans === null)
    return null

  return (


      <div className="host-vans-container">
      
      <h1>Your Listed Vans</h1>

      
      <div className="vans-wrapper">
      
      {hostVans.map((van) => {

       return (
  
        <NavLink className="van-item-link"  key = {van.id} to = {`/host/vans/${van.id}`}> 
        
        <div className="van-list-item"> 
        
          <img className="van-image"  src={van.imageUrl} />

          <div className="van-name-price-wrapper">
          
          <h2>{van.name}</h2>
          <h3>{van.price}/day</h3>

          </div>   
        </div>

        </NavLink>
         )

      })}
      
      </div>
      </div>
  )

}

export default HostVans