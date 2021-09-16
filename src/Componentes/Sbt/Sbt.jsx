import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../Canais/Canais";
import "./Sbt.css";
import Corpo from "../Corpo/Corpo";

function SbtApp() {
	return (
		<div className="App">
			<div>
				<Header />
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Globo"}
						color={"rgb(220, 220, 210)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default SbtApp;
