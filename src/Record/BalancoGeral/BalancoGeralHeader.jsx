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
					<Link to="/record">Voltar</Link>
				</li>
				<li>
					<Link to="/record/balancogeral/capital">
						Noticias da Capital
					</Link>
				</li>
				<li>
					<Link to="/#">Noticias do Interior</Link>
				</li>
				<li>
					<Link to="/#">Noticias de Brasília</Link>
				</li>
				<li>
					<Link to="/#">Noticias de Culinária</Link>
				</li>
			</nav>
		</div>
	);
}
