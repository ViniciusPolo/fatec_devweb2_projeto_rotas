import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./RecordHeader";
import "./Record.css";
import Corpo from "../Componentes/Corpo/Corpo";

function RecordApp() {
	return (
		<div className="App">
			<div>
				<Switch>
					<Route
						exact
						path="/record"
						render={() => <Header />}
					></Route>
				</Switch>
			</div>
			<main>
				<div>
					<Corpo
						nomecanal={"Record"}
						color={"rgb(247, 250, 50)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}

export default RecordApp;
