import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/single.css';

export function Single ({object}) {
	const { store, actions } = useContext(Context);
	const {clase, theid} = useParams();
	const [details, setDetails] = useState({});


	useEffect(() => {

		fetch (`https://www.swapi.tech/api/${clase}/${theid}`)
		.then (res => {
		  if (res.ok){
			return res.json();
		  }else {
			console.log('Error al cargar los personajes');
		  }
		})
		.then (data => {
			setDetails(data.result.properties);
		})
	},[]);

	return (
		<div>
			<div className="contenedor-superior">
				<div className="imagen">
					<img className='imagen' src={`https://starwars-visualguide.com/assets/img/${clase}/${theid}.jpg`}/>
				</div>
				<div className="texto">
					{details.name}
					<p className="parrafo">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>	
			<div className=" d-flex justify-content-center">
				<Link to={'/'} className="btn btn-dark link-warning btn-lg mt-2">Volver a inicio</Link>
			</div>
			
			
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};