
import "../../styles/home.css";
import { Personaje } from '../component/personaje.jsx';
import { Planeta } from '../component/planetas.jsx';
import { Vehicle } from '../component/vehicles.jsx';
import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, action} = useContext(Context);
	
	let [people, planets, vehicles] = [store.people, store.planets, store.vehicles];
	
	return (
	<div>
		<h2 style={{color: 'white'}} className="m-3">Personajes</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			
			{people.map((item) => {
				return <Personaje character={item} clase='characters'></Personaje>
			})}

		</div>
		<h2 style={{color: 'white'}} className="m-3">Planetas</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			
			{planets.map((item) => {
				return <Planeta planet={item} clase='planets'></Planeta>
			})}
	
		</div>
		<h2 style={{color: 'white'}} className="m-3">Vehiculos</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			
			{vehicles.map((item) => {
				return <Vehicle vehicle={item} clase='vehicles'></Vehicle>
			})}
	
		</div>
	</div>
)
};