import React from "react";
import { Footer } from "../Footer";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { claymoreComponents } from "../../helpers/claymoreComponents";


export const Noelle = (props) => {
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

						{claymoreComponents.Orgullo}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>


							{claymoreComponents.Sombra}
						{claymoreComponents.GranSacrificio}
						{claymoreComponents.GranFavonius}

						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">
								{artefactosComponents.Doncella}x4

							</div>

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Retroceso}x2
								{artefactosComponents.Doncella}x2

							</div>

						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-wrap">
					<div className="buildParticular__stat-item">

						{/* INTRODUCIR STATS  <P> */}
						<h3>Reloj</h3>

						<p>Defensa</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Defensa</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Bono Curación</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>% Defensa</p>
						<p>Defensa</p>
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

						{claymoreComponents.Desidia}
						{claymoreComponents.Lapida}
						{claymoreComponents.Orgullo}
						

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						{claymoreComponents.Medula}
						{claymoreComponents.GranPenasco}
						{claymoreComponents.Litica}
						{claymoreComponents.Argento}
						{claymoreComponents.Arcaico}
						{claymoreComponents.Sombra}

						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">
							{artefactosComponents.Retroceso}x4
							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Gladiador}x4

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
						<p>Defensa</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Bono daño Geo</p>


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
						<p>% Defensa</p>
						<p>% Ataque</p>
						<p>Recarga de energía</p>
						<p>Defensa</p>
						<p>Ataque</p>
						
					</div>
					</div>	
				</div>
			</div>
			<Footer />
		</>
	);
};
