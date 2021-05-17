import React from "react";
import { Link } from "react-router-dom";
import { ArtefactosScreen } from "./ArtefactosScreen";
import { PersonajesScreen } from "./PersonajesScreen";

export const NavbarUi = () => {


	return (
		<div className="navbar__container">
			{/* <h5><Link to='/' component={PersonajesScreen}> Personajes </Link></h5> */}
			{/* <h5><Link to='/Artefactos' component={ArtefactosScreen}> Artefactos </Link></h5> */}
			<h5> Armas</h5>
			<h5>Videos</h5>
			<h5>Discord</h5>

		</div>
	);
};
