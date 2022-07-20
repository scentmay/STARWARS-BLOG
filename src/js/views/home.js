
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personaje } from '../views/personaje.jsx';
import { Planeta } from '../views/planetas.jsx';

export const Home = () => {
	return (
	<>
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
		</>
)

	
};

