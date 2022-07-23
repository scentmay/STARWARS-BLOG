import "../../styles/home.css";
import { Personaje } from '../component/personaje.jsx';
import { Planeta } from '../component/planetas.jsx';
import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, action} = useContext(Context);
	let [personajes, planetas] = [store.people, store.planets];

	return (
	<div>
		<h2>Personajes</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			{
				personajes.map((item, index) =>{
					console.log('prueba')
				})
			}
			
			{/* <Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje />
			<Personaje /> */}
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

