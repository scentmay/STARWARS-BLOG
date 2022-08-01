const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			people:[],
			planets: [],
			vehicles: [],
			favoritos: []
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
					//Esto es lo que llega de la API (uno de los objetos)
					//{
					//	"uid": "1",
					//	"name": "Luke Skywalker",
					//	"url": "https://www.swapi.tech/api/people/1"
					//}
					//ahora lo guardamos en la store
					setStore({people: personajeRecuperado})
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
				// Esto es lo que nos llega de la API
				// {
				// 	"uid": "1",
				// 	"name": "Tatooine",
				// 	"url": "https://www.swapi.tech/api/planets/1"
				// }
				//Introducimos los planetas recuperados en la store
				.then (data => {
					let planetaRecuperado = data.results;
					setStore({planets: planetaRecuperado})
				})
			},

			//Función para traer vehiculos de la API
			getVehicles: () => {
				fetch ('https://www.swapi.tech/api/vehicles/')
				.then (res => {
					if (res.ok){
						return res.json();
					}else {
						console.log('Error al cargar los vehiculos');
					}
				})
				//Introducimos los vehiculos recuperados en la store
				.then (data => {
					let vehiculoRecuperado = data.results;
					setStore({Planeta: vehiculoRecuperado})
				})
			},

			//Añadir favorito
			setFav: (name, url) => {
				let temporal =[...getStore().favoritos]
				//Lógica para no añadir un elemento si YA está en esta lista
				let repetido = false;
				temporal.map( item => {
					if (item.name == name){
						repetido = true;
					}
				})
				if (!repetido){
					temporal.push({"name": name, "url": url})
					setStore({
						favorites: temporal
					})
				}
			},

			//Borrar favorito
			deleteFav: (name) => {
				let temporal = getStore().favorites.filter((item) => item !== name); 
				setStore({favoritos: temporal})
			}

		}
		
	};
	
};

export default getState;
