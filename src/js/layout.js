import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Persona from "./component/Persona";
import Planeta from "./component/Planeta";
import Vehiculo from "./component/Vehiculo";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PersonaCard from "./views/persona-card";
import PlanetaCard from "./views/planeta-card";
import VehiculoCard from "./views/vehiculo-card";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/persona/:id">
							<PersonaCard />
						</Route>
						<Route exact path="/planeta/:id">
							<PlanetaCard />
						</Route>
						<Route exact path="/vehiculo/:id">
							<VehiculoCard />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
