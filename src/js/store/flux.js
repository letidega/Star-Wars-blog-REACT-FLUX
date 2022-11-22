const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [], 
			planetas: [],
			detallePlanetas: {},
			vehiculos: [],
			detalleVehiculos: {},
			personas: [],
			detallePersonas: {},

		},
		actions: {
			// Use getActions to call a function within a fuction
				obtenerPlanetas : async () => {
				const res = await fetch("https://swapi.tech/api/planets/");
				const data = await res.json();
				setStore({planetas: data.results})
			  },
			  obtenerDetallePlanetas : async (id) => {
				const res = await fetch(`https://swapi.tech/api/planets/${id}`);
				const data = await res.json();
				setStore({detallePlanetas: data.result})
			  },
			
			  obtenerPersonas : async () => {
				const res = await fetch("https://swapi.tech/api/people/");
				const data = await res.json();
				setStore({personas: data.results})
			  },

			  obtenerDetallePersonas : async (id) => {
				const res = await fetch(`https://swapi.tech/api/people/${id}`);
				const data = await res.json();
				setStore({detallePersonas: data.result})
			  },
			  obtenerVehiculos: async () => {
				const res = await fetch("https://swapi.tech/api/vehicles");
				const data = await res.json();
				setStore({vehiculos: data.results})
			  },

			  obtenerDetalleVehiculos : async (id) => {
				const res = await fetch(`https://swapi.tech/api/vehicles/${id}`);
				const data = await res.json();
				setStore({detalleVehiculos: data.result})
			  },

			  agregarFavoritos: (nombre) => {
				const store = getStore();
				setStore({favoritos: [...store.favoritos, nombre]})
			  },

			  eliminarFavoritos: (nombre) => {
				const store = getStore();
				setStore({favoritos: store.favoritos.filter(favorito => favorito != nombre)});
			  }
			
		}
	};
};

export default getState;
