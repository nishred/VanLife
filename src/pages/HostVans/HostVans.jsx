import React, { useEffect, useState } from "react";
import "./HostVans.css";

import { NavLink } from "react-router-dom";
import { fetchHostVans } from "../../Api/hostVans";
import Message from "../../Components/Message/Message";

import Spinner from "../../Components/Spinner/Spinner";



const HostVans = () => {
  const [hostVans, setHostVans] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      try {
        const vans = await fetchHostVans();
        setHostVans(vans);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  
  if(isLoading)
    return <Spinner size={100}/>

  if (error) return <Message message={error} />;


  return (
    <div className="host-vans-container">
      <h1>Your Listed Vans</h1>

      <div className="vans-wrapper">
        {hostVans.map((van) => {
          return (
            <NavLink className="van-item-link" key={van.id} to={`${van.id}`}>
              <div className="van-list-item">
                <img className="van-image" src={van.imageUrl} />

                <div className="van-name-price-wrapper">
                  <h2>{van.name}</h2>
                  <h3>{van.price}/day</h3>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HostVans;
