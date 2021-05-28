import React from "react";
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';

export const NavbarUi = () => {

	return (
		<>
		<div className="navbar__container-big">
			<Link to='/'><h5>Personajes</h5></Link>
			<Link to='/artefactos'><h5>Artefactos</h5></Link>
			<Collapsible trigger={<h5>Armas</h5>}>
				<Link to='/arcos'><h5>Arcos</h5></Link>
				<Link to='/catalizadores'><h5>Catalizadores</h5></Link>
				<Link to='/claymores'><h5>Claymores</h5></Link>
				<Link to='/espadas'><h5>Espadas</h5></Link>
				<Link to='/lanzas'><h5>Lanzas</h5></Link>
			</Collapsible>

			<Link to='/discord'><h5>Discord</h5></Link>

		</div>

		<div className="navbar__container-small">
		<Collapsible trigger={<i className="fas fa-bars"></i>}>
		
			<Link to='/'><h5>Personajes</h5></Link>
			<Link to='/artefactos'><h5>Artefactos</h5></Link>
			<Link to='/arcos'><h5>Arcos</h5></Link>
			<Link to='/catalizadores'><h5>Catalizadores</h5></Link>
			<Link to='/claymores'><h5>Claymores</h5></Link>
			<Link to='/espadas'><h5>Espadas</h5></Link>
			<Link to='/lanzas'><h5>Lanzas</h5></Link>
			<Link to='/discord'><h5>Discord</h5></Link>


		
		</Collapsible>
		</div>
		</>
	);
};
