import React from "react";

import "./Van.css"

import { Link,useSearchParams } from "react-router-dom";


const Van  = ({id,imageUrl,name,price,type}) => {

   const [searchParams,setSearchParams] = useSearchParams()



   return (

    <div className="van-wrapper">

    <Link className="van-link" state={{search : searchParams.toString()}}  to={`${id}`}>
     
     <img src={imageUrl} />

     <div className="name-price-wrapper">
     
     <h1 className="name">{name}</h1>

     <h2 className="price-head">{price}
     
     <span className="day-abs">/day</span>     

     </h2> 

     </div>

     <span className={`type-span ${type}`}>
     {type}
     </span>

     </Link>
    
    </div>


   )

}

export default Van