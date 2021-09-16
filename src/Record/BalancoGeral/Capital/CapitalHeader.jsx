import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<li>
					<Link to="/">Menu</Link>
				</li>
				<li>
					<Link to="/record/balancogeral">Voltar</Link>
				</li>
				<li>
					<Link to="/#">Política</Link>
				</li>
				<li>
					<Link to="/#">Educação</Link>
				</li>
				<li>
					<Link to="/#">Polícia</Link>
				</li>
				<li>
					<Link to="/#">Culinária</Link>
				</li>
				<li>
					<Link to="/#">Esportes</Link>
				</li>
			</nav>
		</div>
	);
}
