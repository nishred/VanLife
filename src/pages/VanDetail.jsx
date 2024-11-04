import React from "react"
import { useParams } from "react-router-dom"
import "./VanDetail.css"
import { Link,useLocation } from "react-router-dom"

import { IoMdArrowRoundBack } from "react-icons/io";


export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)


    const location = useLocation()


    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
   
       
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                   <Link className="back-vans-link" to = {(location.state)?(`..?${location.state.search}`):("..")} relative="path" >{<IoMdArrowRoundBack />} Back to all vans</Link>
                    <img src={van.imageUrl} />
                    <span className={`type-span ${van.type}`}>{van.type}</span>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>

        
    )
}