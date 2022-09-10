
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import default_image from '../../img/fallo-carga-imagen.jpg';

export function Planeta ({planet, clase}) {

  //Procedemos de igual manera que en Personaje

  const [details, setDetails] = useState({});
  const [image, setImage] = useState(default_image)

  //Gestión de fallo en la carga de imágenes
  //Comprobamos si el fecht devuelve ok, en ese caso seteamos la imagen
  //caso contrario no hace nada y la imagen que cargue será la que tenemos fijada por defecto
  //este bloque se ejecuta con un useEffect al principio de la carga de la página
  function imageDefault() {
    var photo = `https://starwars-visualguide.com/assets/img/${clase}/${planet.uid}.jpg`;

    fetch(photo).then((result)=>{
      if (result.ok) {
        setImage(photo);
      }
    });
  }

  useEffect (()=> {
    imageDefault();
  },[]) 

  // useEffect(() => {

  //   fetch(`https://www.swapi.tech/api/planets/${planet.uid}`)
  //   .then(res => {
  //     if (res.ok) return res.json();
  //     else console.log ('Error al cargar los planetas');
  //   })
  //   .then(data => {
  //     setDetails(data.result.properties);
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


  //   })
  // },[]);


  return(
      <div className="card m-2" style={{minWidth: '18rem', background:"rgb(256, 166, 0, 0)"}}>
      <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 style={{color: 'white'}} className="card-title">{planet.name}</h5>
          {/* <p style={{color: 'white'}} className="card-text">Población:{details?.population}<br></br>Terreno: {details?.terrain}</p> */}
          <Link to={`/${clase}/${planet.uid}`} className="btn btn-warning link-dark mt-3">Detalles</Link>
        </div>
      </div>
   );
}

