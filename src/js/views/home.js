import "../../styles/home.css";
import { Personaje } from '../component/personaje.jsx';
import { Planeta } from '../component/planetas.jsx';
import { Vehicle } from '../component/vehicles.jsx';
import React, {useContext} from "react";
import { Context } from "../store/appContext";


export const Home = () => {

	const {store, action} = useContext(Context);

	let [people, planets, vehicles, favoritos] = [store.people, store.planets, store.vehicles, store.favoritos];
	
	return (
	<div>
		{/* Renderizar favoritos */}
		<h2 style={{color: 'black'}} className="m-3 btn btn-warning link-dark">Favoritos</h2>
		<div className="favoritos">
			<ul>
				{favoritos.map((item) => {
					return( 
					<>
						<li>{item.name}</li>
						<li>{item.url}</li>
					</>
					)
				})}
			</ul>
		</div>

		<h2 style={{color: 'white', textDecoration: "underline"}} className="m-3">Personajes</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
			
			{people.map((item) => {
				return <Personaje character={item} clase='people' clase2='characters'></Personaje>
			})}


		</div>
		<h2 style={{color: 'white',textDecoration: "underline"}} className="m-3">Planetas</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			
			{planets.map((item) => {
				return <Planeta planet={item} clase='planets'></Planeta>
			})}
	
		</div>
		<h2 style={{color: 'white', textDecoration: "underline"}} className="m-3">Vehiculos</h2>
		<div className="text-center mt-5 d-flex overflow-scroll" style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
			
			{vehicles.map((item) => {
				return <Vehicle vehicle={item} clase='vehicles'></Vehicle>
			})}
	
		</div>
		
	</div>
	
)
};