import React, { useEffect, useState } from "react";
import "./HostVanDetails.css"
import { NavLink, useParams } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";


const HostVanDetails = () => {

   
   const {id} = useParams()

   const [hostVanDetail,setHostVanDetail] = useState(null)

   useEffect(() => {

     async function fetchHostVanDetail()
     {

      const response = await fetch(`/api/host/vans/${id}`)

      const json = await response.json()

      setHostVanDetail(json.vans[0])

     }

     fetchHostVanDetail()
  

   },[])


   if(hostVanDetail === null)
    return null

   console.log(hostVanDetail)


   return (

        <>

        <NavLink className="link-back-host-vans" to="/host/vans">{<IoMdArrowRoundBack />}  Back to all vans</NavLink>

        <div className="van-depth-wrapper">
        
           
        <div className="depth-wrapper">
        
        <img src={hostVanDetail.imageUrl} />
        
        <div className="depth-name-price-wrapper">
        
        <span className={`type-span ${hostVanDetail.type}`}>{hostVanDetail.type}</span>
        
        <h1>{hostVanDetail.name}</h1>

        <h2>{hostVanDetail.price}<span>/day</span></h2>

        </div>

        </div>
        
        </div>

        </>

   )


}

export default HostVanDetails