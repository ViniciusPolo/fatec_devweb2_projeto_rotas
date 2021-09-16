import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../Canais/Canais";
import "./Globo.css";
import Corpo from "../Corpo/Corpo";

function GloboApp() {
	return (
		<div className="App">
			<div>
				<Switch>
					<Route
						exact
						path="/globo"
						render={() => <Header />}
					></Route>
				</Switch>
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Globo"}
						color={"rgb(247, 250, 50)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default GloboApp;
