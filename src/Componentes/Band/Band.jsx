import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../Canais/Canais";
import "./Band.css";
import Corpo from "../Corpo/Corpo";

function BandApp() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Band"}
						color={"rgb(150, 150, 250)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default BandApp;
