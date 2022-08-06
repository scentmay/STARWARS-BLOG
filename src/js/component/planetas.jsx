
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Planeta ({planet, clase}) {

  //Procedemos de igual manera que en Personaje

  const [details, setDetails] = useState({});

  useEffect(() => {

    fetch(`https://www.swapi.tech/api/planets/${planet.uid}`)
    .then(res => {
      if (res.ok) return res.json();
      else console.log ('Error al cargar los planetas');
    })
    .then(data => {
      setDetails(data.result.properties);
      //Este es el objeto que almacenamos
      // "result": {
      //   "properties": {
      //       "diameter": "10465",
      //       "rotation_period": "23",
      //       "orbital_period": "304",
      //       "gravity": "1 standard",
      //       "population": "200000",
      //       "climate": "arid",
      //       "terrain": "desert",
      //       "surface_water": "1",
      //       "created": "2022-07-27T00:57:42.897Z",
      //       "edited": "2022-07-27T00:57:42.897Z",
      //       "name": "Tatooine",
      //       "url": "https://www.swapi.tech/api/planets/1"
      //   }


    })
  },[]);


  return(
      <div className="card m-2" style={{minWidth: '18rem', background:"rgb(256, 166, 0, 0)"}}>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 style={{color: 'white'}} className="card-title">{planet.name}</h5>
          <p style={{color: 'white'}} className="card-text">Población:{details?.population}<br></br>Terreno: {details?.terrain}</p>
          <Link to={`/${clase}/${planet.uid}`} className="btn btn-warning link-dark">Detalles</Link>
        </div>
      </div>
   );
}

