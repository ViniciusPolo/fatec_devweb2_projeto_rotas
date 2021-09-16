import React from "react";
import {Link} from "react-router-dom";
import "./Canais.css";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<li id="record">
					<Link to="/record">1 - Record</Link>
				</li>
				<li id="cultura">
					<Link to="/cultura">2 - Cultura</Link>
				</li>
				<li id="band">
					<Link to="/band"> 3 - Band</Link>
				</li>
				<li id="globo">
					<Link to="/globo">4 - Globo</Link>
				</li>
				<li id="sbt">
					<Link to="/sbt">5 - SBT</Link>
				</li>
			</nav>
		</div>
	);
}
