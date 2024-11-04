import React, { useEffect } from "react";
import {useSearchParams} from "react-router-dom"
import Van from "../Components/Van/Van";
import "./Vans.css"
import { types } from "../utils";

const Vans = () => {

  const [vans,setVans] = React.useState(null)

  const [searchParams,setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  // loading | success | error
  const [status,setStatus] = React.useState("loading")

  

  useEffect(() => {

   async function fetchVans()
   {

     const response = await fetch("/api/vans")

     const json = await response.json()

     setVans(json.vans)

     setStatus("success")

   }

   fetchVans()


  },[])


  if(status === "loading")
    return <p>Loading...</p>


   const filteredVans = (typeFilter)?(

     vans.filter((van) => {

         return van.type === typeFilter

     })

   ):([...vans])


  function handleSetSearchParams(key,value)
  {

       setSearchParams((prevParams) => {

           if(value)
           {
               prevParams.set(key,value)
            

           }
           else{

              prevParams.delete(key)
           }


           return prevParams
  

       })


  } 



  return (


     <div className="vans-wrapper">

      <h1>Explore our Van options</h1> 

      <div className="btn-wrapper">
      
       {types.map((type,idx) => {

             return (<button key={idx} className={(typeFilter === type)?("type-btn checked-btn"):("type-btn unchecked-btn")} onClick={() => {

                 handleSetSearchParams("type",type)
               
             }}>{type}</button>)

       })}

       {(typeFilter) && (<button className="type-btn clear-btn unchecked-btn" onClick={() => {

           handleSetSearchParams("type",null)

       }}>Clear</button>)}
      
      </div>


      <div className="vans-container">
      
       {filteredVans.map((van) => {

          return (<Van key={van.id} id = {van.id} imageUrl={van.imageUrl} name={van.name} price={van.price} type={van.type} />
          )
       })}      
      </div> 
      </div>
  )


}

export default Vans