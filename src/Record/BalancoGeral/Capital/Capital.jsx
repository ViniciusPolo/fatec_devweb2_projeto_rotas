import React from "react";
//import "./App.css";
import {Route, Switch} from "react-router-dom";
//import Header from './Componentes/Canais/Canais';
import Header from "./CapitalHeader";
import Corpo from "../../../Componentes/Corpo/Corpo";

function CapitalApp() {
	return (
		<div className="App">
			<main>
				<Switch>
					<Route
						exact
						path="/record/balancogeral/capital"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
			<main>
				<div>
					<Corpo
						nomecanal={"Noticias da Capital"}
						color={"rgb(10, 250, 10)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default CapitalApp;
