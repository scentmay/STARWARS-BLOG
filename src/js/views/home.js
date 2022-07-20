import "../../styles/home.css";
import { Personaje } from '../component/personaje.jsx';
import { Planeta } from '../component/planetas.jsx';
import React, { useState } from 'react';

export const Home = () => {

	const [personaje, setPersonaje]= useState([]);

	//función que trae todos los personajes
	const listaPersonajes = () => {
		fetch("https://www.swapi.tech/api/people/")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			let nombre = data.results[0].name
			console.log(nombre);
			setPersonaje(nombre);
			console.log(personaje)
		})
		.catch(err => console.error(err))
	}

	listaPersonajes();


	return (
	<div>
		<h1 >personaje</h1>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
		</div>
		<h2>Planetas</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			<Planeta/>
			<Planeta/>
			<Planeta/>
			<Planeta/>
			<Planeta/>
			<Planeta/>
			<Planeta/>
		</div>
	</div>
)
};

