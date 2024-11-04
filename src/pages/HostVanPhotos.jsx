import React from "react"
import {useOutletContext} from "react-router-dom"


const HostVanPhotos = () => {

    const hostVanDetail = useOutletContext()

  return (

    <img width={"100px"} src={hostVanDetail.imageUrl} /> 

  )

}

export default HostVanPhotos