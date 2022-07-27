import React, { useState, useEffect }from "react";

export function Personaje ({character}) {

const [details, setDetails] = useState({});


// Este useEffect lo vamos a usar de manera auxiliar para guardar los datos particulares de cada personaje, por lo tanto se ejecuta siempre al principio
useEffect(() => {

  fetch (`https://www.swapi.tech/api/people/${character.uid}`)
  .then (res => {
    if (res.ok){
      return res.json();
    }else {
      console.log('Error al cargar los personajes');
    }
  })
  //Introducimos los datos de los personajes recuperados en la variable useState que hemos creado para usarla posteriormente
  .then (data => {
    setDetails(data.result.properties);
    // Este es el objeto que guarda de la API
    // "result": {
    //   "properties": {
    //       "height": "172",
    //       "mass": "77",
    //       "hair_color": "blond",
    //       "skin_color": "fair",
    //       "eye_color": "blue",
    //       "birth_year": "19BBY",
    //       "gender": "male",
    //       "created": "2022-07-27T00:57:42.894Z",
    //       "edited": "2022-07-27T00:57:42.894Z",
    //       "name": "Luke Skywalker",
    //       "homeworld": "https://www.swapi.tech/api/planets/1",
    //       "url": "https://www.swapi.tech/api/people/1"
    //   }
  })
},[]);


  return(
      <div className="card m-2" style={{minWidth: '18rem'}}>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          {/*La interrogación antes del punto le indica al programa que si no tiene nada que cargar no lo ponga */}
          <p className="card-text">Género: {details?.gender}<br></br> 
          Color de pelo: {details?.hair_color}<br></br>Color de ojos: {details?.eye_color}</p>
          <a href="#" className="btn btn-primary">Detalles</a>
        </div>
      </div>
   );
}


