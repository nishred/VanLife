import React from "react"
import { useParams } from "react-router-dom"
import "./VanDetail.css"
import { Link } from "react-router-dom"

import { IoMdArrowRoundBack } from "react-icons/io";


export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
   
       
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                   <Link className="back-vans-link" to = "/vans">{<IoMdArrowRoundBack />} Back to all vans</Link>
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