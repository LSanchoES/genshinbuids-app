import React from "react";
import { Cuentos } from "../armasComponents/claymoreComponents/Cuentos";
import { Bruja } from "../artefactosComponents/Bruja";
import { Caballeria } from "../artefactosComponents/Caballeria";
import { Corazon } from "../artefactosComponents/Corazon";
import { Corredor } from "../artefactosComponents/Corredor";
import { Domador } from "../artefactosComponents/Domador";
import { Doncella } from "../artefactosComponents/Doncella";
import { Errante } from "../artefactosComponents/Errante";
import { Furia } from "../artefactosComponents/Furia";
import { Geoarmada } from "../artefactosComponents/Geoarmada";
import { Gladiador } from "../artefactosComponents/Gladiador";
import { Llamas } from "../artefactosComponents/Llamas";
import { Nobleza } from "../artefactosComponents/Nobleza";
import { Petra } from "../artefactosComponents/Petra";
import { Retroceso } from "../artefactosComponents/Retroceso";
import { Sombraverde } from "../artefactosComponents/Sombraverde";

export const Barbara = () => {
	return (
		<>
			<div>
				<h1>DPS -<em>Builds de daño</em>-</h1>
				<div>
					<h2>Mejores Armas</h2>
				</div>
				<div>
					<h2>Mejores sets</h2>
					<Cuentos></Cuentos>
					<Bruja></Bruja>
					<Caballeria></Caballeria>
					<Corazon></Corazon>
					<Corredor></Corredor>
					<Errante></Errante>
					<Doncella></Doncella>
					<Domador></Domador>
					<Furia></Furia>
					<Geoarmada></Geoarmada>
					<Gladiador></Gladiador>
					<Llamas></Llamas>
					<Nobleza></Nobleza>
					<Petra></Petra>
					<Retroceso></Retroceso>
					<Sombraverde></Sombraverde>
				</div>
				<div>
					<h2>Stats</h2>
					<h3>Copa</h3>

					<h3>Reloj</h3>

					<h3>Casco</h3>

					<h3>SubStats</h3>

				</div>
			</div>
			<div>
				<h1>Support - <em>Builds de apoyo, sanación y nuke</em>-</h1>
				<div>
					<h2>Mejores Armas</h2>
				</div>
				<div>
					<h2>Mejores sets</h2>
				</div>
				<div>
					<h2>Stats</h2>
					<h3>Copa</h3>

					<h3>Reloj</h3>

					<h3>Casco</h3>

					<h3>SubStats</h3>

				</div>
			</div>
		</>
	);
};
