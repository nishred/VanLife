import React, { useEffect, useState } from "react";
import "./HostVan.css"
import { NavLink, useParams,Outlet } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const HostVan = () => {

   const {id} = useParams()

   const [hostVanDetail,setHostVanDetail] = useState(null)

   useEffect(() => {

     async function fetchHostVanDetail()
     {

      const response = await fetch(`/api/host/vans/${id}`)

      const json = await response.json()

      setHostVanDetail(json.vans[0])

      console.log(json.vans[0])

     }

     fetchHostVanDetail()

   },[])


   if(hostVanDetail === null)
    return null

   return (

        <>

        <NavLink className="link-back-host-vans" to=".." relative="path">{<IoMdArrowRoundBack />}  Back to all vans</NavLink>

        <div className="van-depth-wrapper">   
        <div className="depth-wrapper">
        <img src={hostVanDetail.imageUrl} />
        
        <div className="depth-name-price-wrapper">
        
        <span className={`type-span ${hostVanDetail.type}`}>{hostVanDetail.type}</span>
        
        <h1>{hostVanDetail.name}</h1>

        <h2>{hostVanDetail.price}<span>/day</span></h2>

        </div>
        </div>

        <nav>
        
        <ul className="host-van-nav">
        
         <li>
         <NavLink end className={({isActive}) => {

            return (isActive)?("active-link"):("inactive-link")
 

         }}  to=".">Details</NavLink> 
         </li>
         
         <li>
         <NavLink className={({isActive}) => {

               return (isActive)?("active-link"):("inactive-link")
 

         }}  to="pricing">Pricing</NavLink>
         </li>

         <li>
         <NavLink className={({isActive}) => {

             return (isActive)?("active-link"):("inactive-link")
           
         }}  to="photos">Photos</NavLink>
         </li>
        
        </ul>
      
        </nav>

        <Outlet context = {hostVanDetail}/>

        </div>

        </>
   )


}

export default HostVan