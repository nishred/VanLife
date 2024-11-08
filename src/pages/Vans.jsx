import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Van from "../Components/Van/Van";
import "./Vans.css";
import { types } from "../utils";

import Spinner from "../Components/Spinner/Spinner";
import Message from "../Components/Message/Message";

const Vans = () => {
  const [vans, setVans] = React.useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const [isLoading, setIsLoading] = React.useState(true);

  const [error, setError] = React.useState(null);

  useEffect(() => {
    async function fetchVans() {
      setIsLoading(true);

      try {
        const response = await fetch("/api/vans");

        const json = await response.json();

        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });

        setVans(json.vans);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVans();
  }, []);

  if (isLoading) return <Spinner />;

  if (error) return <Message message={error} />;

  const filteredVans = typeFilter
    ? vans.filter((van) => {
        return van.type === typeFilter;
      })
    : [...vans];

  function handleSetSearchParams(key, value) {
    setSearchParams((prevParams) => {
      if (value) {
        prevParams.set(key, value);
      } else {
        prevParams.delete(key);
      }

      return prevParams;
    });
  }

  return (
    <div className="vans-wrapper">
      <h1>Explore our Van options</h1>

      <div className="btn-wrapper">
        {types.map((type, idx) => {
          return (
            <button
              key={idx}
              className={
                typeFilter === type
                  ? "type-btn checked-btn"
                  : "type-btn unchecked-btn"
              }
              onClick={() => {
                if (typeFilter != type) handleSetSearchParams("type", type);
                else handleSetSearchParams("type", null);
              }}
            >
              {type}
            </button>
          );
        })}

        {typeFilter && (
          <button
            className="type-btn clear-btn unchecked-btn"
            onClick={() => {
              handleSetSearchParams("type", null);
            }}
          >
            Clear
          </button>
        )}
      </div>

      <div className="vans-container">
        {filteredVans.map((van) => {
          return (
            <Van
              key={van.id}
              id={van.id}
              imageUrl={van.imageUrl}
              name={van.name}
              price={van.price}
              type={van.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
