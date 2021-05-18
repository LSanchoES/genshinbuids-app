import React from "react";
import { Agata } from "../armasComponents/catalizadorComponents/Agata";
import { Candado } from "../armasComponents/catalizadorComponents/Candado";
import { Carta } from "../armasComponents/catalizadorComponents/Carta";
import { Cuentos } from "../armasComponents/catalizadorComponents/Cuentos";
import { Frio } from "../armasComponents/catalizadorComponents/Frio";
import { Oracion } from "../armasComponents/catalizadorComponents/Oracion";
import { Perla } from "../armasComponents/catalizadorComponents/Perla";
import { Prototipo } from "../armasComponents/catalizadorComponents/Prototipo";
import { Sinfonia } from "../armasComponents/catalizadorComponents/Sinfonia";
import { Corazon } from "../artefactosComponents/Corazon";
import { Doncella } from "../artefactosComponents/Doncella";
import { Errante } from "../artefactosComponents/Errante";
import { Gladiador } from "../artefactosComponents/Gladiador";
import { Nobleza } from "../artefactosComponents/Nobleza";
import { Footer } from "../Footer";



export const Barbara = (props) => {
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

						<Cuentos /> Es de 3 estrellas pero es la mejor para Barbara

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

							<Prototipo />

						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							<Doncella /> x4

							</div>

							<div className="buildParticular__artefactos-item">

							<Nobleza />	x4

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
						<p>Vida</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Vida</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Bono Curación</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>Vida</p>
						<p>% Vida</p>
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

							<Candado />
							<Oracion />

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

							<Sinfonia />
							<Perla />
							<Agata />
							<Carta />
							<Frio />

						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							<Corazon /> x4

							</div>

							<div className="buildParticular__artefactos-item">

							<Errante />	x4

							</div>
							<div className="buildParticular__artefactos-item">

							<Corazon />	x2
							<Gladiador /> x2

							</div>
							<div className="buildParticular__artefactos-item">

							<Errante />	x2
							<Gladiador /> x2


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


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						<p>Bono daño Hydro</p>
						


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>
						<p>% Ataque</p>
						<p>Maestría elemental</p>
						<p>Ataque</p>
						
					</div>
					</div>	
				</div>
			</div>

			<Footer />
		</>
	);
};
