import React from "react";
import { Footer } from "../Footer";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { espadaComponents } from "../../helpers/espadaComponents";

export const Albedo = (props) => {
	//Desestructurando props ya sabes... llegan del Link Dynamico (PersonajesBuild)
	const { personaje } = props;



	return (
		<>
			<div className="buildParticular__container">
				<h1>{personaje.rol1}</h1>

				{/* COMPONENTES DE ARMAS */}
				<div className="buildParticular__armas-container">
					<div className="buildParticular__armas">
						<h2>Armas⭐⭐⭐⭐⭐</h2>

						{espadaComponents.Cortador}
						{espadaComponents.Rompemontanas}


					</div>
					<div className="buildParticular__armas">
						<h2>Armas⭐⭐⭐⭐</h2>

						{espadaComponents.Deseo}
						{espadaComponents.PenascoOsucro}
						{espadaComponents.Negra}
						{espadaComponents.Espina}
						{espadaComponents.Rencor}
					</div>
				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
					<div className="buildParticular__artefactos">
						{/* COMPONENTES DE ARTEFACTOS */}

						<div className="buildParticular__artefactos-item">
							{artefactosComponents.Petra}x2 {artefactosComponents.Nobleza}x2
						</div>

						<div className="buildParticular__artefactos-item">
							{artefactosComponents.Geoarmada}x4
						</div>

						<div className="buildParticular__artefactos-item">
							{artefactosComponents.Petra}x4
						</div>

						<div className="buildParticular__artefactos-item">
							{artefactosComponents.Nobleza}x4
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

							<p>Bono daño Geo</p>
						</div>
						<div className="buildParticular__stat-item">
							<h3>Casco</h3>

							<p>Daño Crítico</p>
							<p>Probabilidad de Crítico</p>
							<p>Defensa</p>
						</div>
						<div className="buildParticular__stat-item">
							<h3>SubStats</h3>

							<p>Probabilidad/Daño Crítico</p>
							<p>% Defensa</p>
							<p>Recarga de energía</p>
							<p>Defensa</p>

						</div>
					</div>
				</div>
			</div>

			{/* BUILD 2 */}
			<div className="buildParticular__container">
				<h1>{personaje.rol2}</h1>

				{/* COMPONENTES DE ARMAS */}
				<div className="buildParticular__armas-container">
					<div className="buildParticular__armas">
						<h2>Armas⭐⭐⭐⭐⭐</h2>
						{espadaComponents.Cortador}
						{espadaComponents.Rompemontanas}
						{espadaComponents.Hoja}
					</div>
					<div className="buildParticular__armas">
						<h2>Armas⭐⭐⭐⭐</h2>
					</div>
				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
					<div className="buildParticular__artefactos">
						{/* COMPONENTES DE ARTEFACTOS */}

						<div className="buildParticular__artefactos-item">
							{artefactosComponents.Gladiador}x2{artefactosComponents.Petra}x2
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

							<p>Bono daño Geo</p>
						</div>
						<div className="buildParticular__stat-item">
							<h3>Casco</h3>

							<p>Daño Crítico</p>
							<p>Probabilidad de Crítico</p>
							<p>Defensa</p>
						</div>
						<div className="buildParticular__stat-item">
							<h3>SubStats</h3>

							<p>Probabilidad/Daño Crítico</p>
							<p>% Defensa</p>
							<p>Recarga de energía</p>
							<p>Defensa</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
