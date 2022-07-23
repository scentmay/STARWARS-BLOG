const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			people:[],
			planets: []
		},
		actions: {
			// Función para traer personajes de la API
			getPeople: () => {
				fetch ('https://www.swapi.tech/api/people/')
				.then (res => {
					if (res.ok){
						return res.json();
					}else {
						console.log('Error al cargar los personajes');
					}
				})
				//Introducimos los personajes recuperados en la store
				.then (data => {
					let personajeRecuperado = data.results;
					setStore({Personaje: personajeRecuperado})
				})
			},
			// Función para traer planetas de la API
			getPlanets: () => {
				fetch ('https://www.swapi.tech/api/planets/')
				.then (res => {
					if (res.ok){
						return res.json();
					}else {
						console.log('Error al cargar los planetas');
					}
				})
				//Introducimos los planetas recuperados en la store
				.then (data => {
					let planetaRecuperado = data.results;
					setStore({Planeta: planetaRecuperado})
				})
			}
		}
		
	};
	
};

export default getState;
