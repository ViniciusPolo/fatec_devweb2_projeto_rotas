import React from "react";
//import "./App.css";
import {Route, Switch} from "react-router-dom";
//import Header from './Componentes/Canais/Canais';
import Header from "./BalancoGeralHeader";
import Corpo from "../../Componentes/Corpo/Corpo";

function BalancoApp() {
	return (
		<div className="App">
			<main>
				<Switch>
					<Route
						exact
						path="/record/balancogeral"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
			<main>
				<div>
					<Corpo
						nomecanal={"Balanço Geral"}
						color={"rgb(10, 250, 10)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default BalancoApp;
