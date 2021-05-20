import React from "react";
import { Agata } from "../armasComponents/catalizadorComponents/Agata";
import { Candado } from "../armasComponents/catalizadorComponents/Candado";
import { Carta } from "../armasComponents/catalizadorComponents/Carta";
import { Codice } from "../armasComponents/catalizadorComponents/Codice";
import { Frio } from "../armasComponents/catalizadorComponents/Frio";
import { Grimorio } from "../armasComponents/catalizadorComponents/Grimorio";
import { Ojo } from "../armasComponents/catalizadorComponents/Ojo";
import { Oracion } from "../armasComponents/catalizadorComponents/Oracion";
import { Pergamino } from "../armasComponents/catalizadorComponents/Pergamino";
import { Perla } from "../armasComponents/catalizadorComponents/Perla";
import { Sinfonia } from "../armasComponents/catalizadorComponents/Sinfonia";
import { Bruja } from "../artefactosComponents/Bruja";
import { Errante } from "../artefactosComponents/Errante";
import { Gladiador } from "../artefactosComponents/Gladiador";
import { Nobleza } from "../artefactosComponents/Nobleza";
import { Footer } from "../Footer";


export const Yanfei = (props) => {
	//Desestructurando props ya sabes... llegan del Link Dynamico (PersonajesBuild)
	const {personaje} = props;

	return (
		<>
			<div className="buildParticular__container">
				<h1>{personaje.rol1}</h1>

					{/* COMPONENTES DE ARMAS */}
					<div className="buildParticular__armas-container">

						<div className="buildParticular__armas" >
						<h2>Armas⭐⭐⭐⭐⭐</h2>
							<Pergamino />
							<Oracion />
							<Candado />


						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

							<Sinfonia />
							<Perla />
							<Agata />
							<Carta />
							<Grimorio />
							<Ojo />
							<Frio />


						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">
							<Bruja />x4
							</div>

							<div className="buildParticular__artefactos-item">
							<Errante />x4
							</div>

							<div className="buildParticular__artefactos-item">
							<Bruja />x2 <Gladiador /> x2
							</div>


						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-wrap">
					<div className="buildParticular__stat-item">

						{/* INTRODUCIR STATS  <P> */}
						<h3>Reloj</h3>

						<p>Ataque</p>
						<p>Maestría Elemental</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>

						<p>Bono daño Pyro</p>

					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>

						<p>Probabilidad / Daño Crítico</p>
						<p>Maestría Elemental</p>
						<p>Ataque</p>
						<p>% Ataque</p>
						<p>Recarga de energía</p>
						
					</div>
					</div>	
				</div>
			</div>
			
			{/* BUILD 2 */}
			<div className="buildParticular__container">
				<h1>{personaje.rol2}</h1>

					{/* COMPONENTES DE ARMAS */}
					<div className="buildParticular__armas-container">

						<div className="buildParticular__armas" >
						<h2>Armas⭐⭐⭐⭐⭐</h2>

						<Pergamino />

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						<Sinfonia />
						<Carta />
						<Codice />



						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">
							<Nobleza /> x4
							</div>
							<div className="buildParticular__artefactos-item">
							<Bruja /> x4
							</div>

						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-wrap">
					<div className="buildParticular__stat-item">

						{/* INTRODUCIR STATS  <P> */}
						<h3>Reloj</h3>

						<p>Recarga de Energía</p>
						<p>Ataque</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Bono daño Pyro </p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>Probabilidad / Daño Crítico</p>
						<p>Maestría Elemental</p>
						<p>Ataque</p>
						<p>% Ataque</p>
						<p>Recarga de energía</p>
						
						
					</div>
					</div>	
				</div>
			</div>
			<Footer />
		</>
	);
};
