import React, { useEffect } from "react";

import Van from "../Components/Van/Van";

import "./Vans.css"
import { types } from "../utils";

const initialState = {}

types.forEach((type) => {


  initialState[type] = false

})


const Vans = () => {


  const [vans,setVans] = React.useState(null)

  const [typeState,setTypeState] = React.useState(initialState)



  let showAll = true

  Object.keys(typeState).forEach((type) => {

      if(typeState[type])
        showAll = false

  })


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


  return (


     <div className="vans-wrapper">

      <h1>Explore our Van options</h1> 

      <div className="btn-wrapper">
      {types.map((type,idx) => {
 
         return (<button onClick={() => {

             const nextTypeState = {...typeState}

             nextTypeState[type] = !nextTypeState[type]

             setTypeState(nextTypeState)
 

         }}  className={`type-btn ${typeState[type]?("checked-btn"):("unchecked-btn")}`} key={type}>{type}</button>)


      })}

      <button className="clear-filters" onClick={() => {


         setTypeState(initialState)


      }} >Clear filters</button>
       
      </div>

      <div className="vans-container">
      
      
       {vans.filter((van) => {
         
           if(showAll)
            return true

           return typeState[van.type]

       }).map((van) => {

          return (<Van key={van.id} id = {van.id} imageUrl={van.imageUrl} name={van.name} price={van.price} type={van.type} />
          )


       })}

      
      </div> 





      </div>

  )


}

export default Vans