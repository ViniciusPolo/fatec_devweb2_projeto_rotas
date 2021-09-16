import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../Canais/Canais";
import "./Cultura.css";
import Corpo from "../Corpo/Corpo";

function CulturaApp() {
	return (
		<div className="App">
			<div>
				<Route exact path="/cultura" render={() => <Header />}></Route>
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Cultura"}
						color={"rgb(250, 50, 250)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default CulturaApp;
