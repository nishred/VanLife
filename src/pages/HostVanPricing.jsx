import React from "react"
import {useOutletContext} from "react-router-dom"


const HostVanPricing = () => {


  const hostVanDetail = useOutletContext()

  return (
    
    <h1><strong>{hostVanDetail.price}</strong>/day</h1>

  )



}

export default HostVanPricing