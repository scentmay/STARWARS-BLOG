import "../../styles/home.css";
import { Personaje } from '../component/personaje.jsx';
import { Planeta } from '../component/planetas.jsx';
import React, { useState,useEffect } from 'react';

export const Home = () => {


	useEffect(() => {
		listaPersonajes();
		listaPlanetas();
		}, []);
	const [personaje, setPersonaje]= useState([]);

	//función que trae todos los personajes
	const listaPersonajes = () => {
		fetch("https://www.swapi.tech/api/people/")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			let nombre = data.results
			console.log(nombre);
			setPersonaje(nombre);
			console.log(personaje)
		})
		.catch(err => console.error(err))
	}

	

	const [planeta, setPlaneta]= useState([]);

	//función que trae todos los planetas
	const listaPlanetas = () => {
		fetch("https://www.swapi.tech/api/planets/")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			let nombre = data.results
			console.log(nombre);
			setPlaneta(nombre);
			console.log(planeta)
		})
		.catch(err => console.error(err))
	}



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
		{(planeta.length>0) && planeta.map(plan=>{ return<Planeta name={plan.name} terrain={plan.terrain} />})}
		</div>
	</div>
)
};
