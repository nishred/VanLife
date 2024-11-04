import React from "react"

import {useOutletContext} from "react-router-dom"

const HostVanDetails = () => {


  const hostVanDetail = useOutletContext()


   return (


      <>
      
      <p><strong>Name: </strong>{hostVanDetail.name}</p>
      <p><strong>Category: </strong>{hostVanDetail.type}</p>

      <p><strong>Description: </strong>{hostVanDetail.description}</p>

      <p><strong>Visibility: </strong>public</p>
      
      
      </>


   )


}

export default HostVanDetails