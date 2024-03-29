import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/single.css';
import { CharInfo } from "../component/charInfo.jsx";
import { PlanetInfo } from "../component/planetInfo.jsx";
import { VehicleInfo } from "../component/vehicleInfo.jsx";

export function Single () {
	const {store, actions} = useContext(Context);
	const {clase, theid} = useParams();
	const [details, setDetails] = useState({});
	const [isFavorite, setIsFavorite] = useState(false);


	const handlePress = (e) => {
		e.preventDefault();
		let favs = [...store.favoritos]; //[...] -> hace una copia del array
		console.log(favs);
		setIsFavorite(!isFavorite); //conmutamos estado
		//console.log(isFavorite);
		//Usamos la exclamación porque no da tiempo a que cambie el estado del componente,
		//por eso utilizamos el estado contrario en la condición del if
		if (!isFavorite){
			favs.push({
			 "name": details.name,
			 "url": details.url,
			 "clase": clase,
			 "id": theid
		});
		}else {
			favs = favs.filter((item) => item.name !== details.name );
		}
		actions.setFavs(favs);
	}


	useEffect(() => {

		fetch (`https://www.swapi.tech/api/${clase}/${theid}`)
		.then (res => {
		  if (res.ok){
			return res.json();
		  }else {
			console.log('Error al cargar los datos');
		  }
		})
		.then (data => {
			setDetails(data.result.properties);
		})
	},[]);





	 useEffect(() => {
		for (let item of store.favoritos) {
			console.log(item)
	   if (item.name == details.name) setIsFavorite(true)
	   else setIsFavorite(false)
		}
	 },[details, isFavorite]);



	return (
		<div>
			<div className="contenedor-superior">
				<div className="imagen">
					<img className='imagen' src={(clase == "people") ? (`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`):(`https://starwars-visualguide.com/assets/img/${clase}/${theid}.jpg`)
					}/> 
				</div>
				<div className="texto">
					{details.name}
					<p className="parrafo">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>	
			<div className="caracteristicas">

					{/* renderizado condicional en función del valor de la variable clase del useState */}
				
						{(clase == 'people')  && <CharInfo details={details}/>}
						{(clase == 'planets') && details.name &&<PlanetInfo details={details}/>}
						{(clase == 'vehicles') && details.name && <VehicleInfo details={details}/>}
			</div>
			<div className=" d-flex justify-content-center">
				<Link to={'/'} className="btn btn-dark link-warning btn-lg mt-2">Volver a inicio</Link>
				<a href = '' onClick={
					(e) => {
						handlePress(e);
					} 
					} className="btn btn-outline-danger" style={{height: "50px", marginTop: "7px"}}>
					{
						(isFavorite) ? (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill mt-1" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
					  </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart mt-1" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
					  </svg>)
					}
				</a>
			</div>
			
			
			
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};