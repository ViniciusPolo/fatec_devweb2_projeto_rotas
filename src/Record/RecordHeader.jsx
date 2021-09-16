import React from "react";
import {Link} from "react-router-dom";
import Corpo from "../Componentes/Corpo/Corpo";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<li>
					<Link to="/">Voltar</Link>
				</li>
				<li>
					<Link to="/falabrasil">Fala Brasil</Link>
				</li>
				<li>
					<Link to="/record/balancogeral">Balanço Geral</Link>
				</li>
				<li>
					<Link to="/#">Cidade Alerta</Link>
				</li>
				<li>
					<Link to="/#">A Fazenda</Link>
				</li>
				<li>
					<Link to="/#">Raul Gil</Link>
				</li>
			</nav>
			<main>
				<div id="corpo">
					<Corpo
						nomecanal={"Record"}
						color={"rgb(10, 250, 10)"}
					></Corpo>
				</div>
			</main>
		</div>
	);
}
