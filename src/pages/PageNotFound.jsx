import React from "react"
import "./PageNotFound.css"

import {Link} from "react-router-dom"


const PageNotFound = () => {


   return (

      <div className="page-not-found">
      
      <h1>Sorry, the page you are looking for has not been found</h1> 

             
      <Link to="/" className="back-home-btn">Return to home</Link>

      </div>


   )


}

export default PageNotFound