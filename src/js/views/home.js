
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personaje } from '../views/personaje.jsx';

export const Home = () => (
	<div className="text-center mt-5 d-flex overflow-scroll" style={{overflow: 'auto', whiteSpace: 'nowrap'}}>
		<Personaje />
		<Personaje />
		<Personaje />
		<Personaje />
		<Personaje />
		<Personaje />
		<Personaje />
		<Personaje />
	</div>
);
