import React from "react";
import {Link} from "react-router-dom";

const Corpo = (props) => {
	let estilo = {backgroundColor: props.color || "gray"};
	return (
		<div className="corpo" style={estilo}>
			<h1 className="nomecanal">{props.nomecanal}</h1>
		</div>
	);
};
export default Corpo;
