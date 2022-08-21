import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import default_image from '../../img/fallo-carga-imagen.jpg';

export function Personaje ({character, clase, clase2}) {

const [details, setDetails] = useState({});
const [image, setImage] = useState(default_image)

//Gestión de fallo en la carga de imágenes
//Comprobamos si el fecht devuelve ok, en ese caso seteamos la imagen
//caso contrario no hace nada y la imagen que cargue será la que tenemos fijada por defecto
//este bloque se ejecuta con un useEffect al principio de la carga de la página
function imageDefault(image) {
  var photo = `https://starwars-visualguide.com/assets/img/${clase2}/${character.uid}.jpg`;

  fetch(photo).then((result)=>{
    if (result) {
      setImage(photo);
    }
  });
}


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


useEffect (()=> {
  imageDefault();
},[]) 

  return(
      <div className="card m-2" style={{minWidth: '18rem', background:"rgb(256, 166, 0, 0)"}}>
      <img src={image} className="card-img-top" alt="Fallo al recuperar imagen" />
        <div className="card-body">
          <h5 style={{color: 'white'}} className="card-title">{character.name}</h5>
          {/*La interrogación antes del punto le indica al programa que si no tiene nada que cargar no lo ponga */}
          <p style={{color: 'white'}} className="card-text">Género: {details?.gender}<br></br> 
          Color de pelo: {details?.hair_color}<br></br>Color de ojos: {details?.eye_color}</p>
          <Link to={`/${clase}/${character.uid}`} className="btn btn-warning link-dark">Detalles</Link>
        </div>
      </div>
   );
}