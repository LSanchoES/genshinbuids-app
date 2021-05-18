import React from "react";
import { Cuentos } from "../armasComponents/catalizadorComponents/Cuentos";
import { Prototipo } from "../armasComponents/catalizadorComponents/Prototipo";
import { Doncella } from "../artefactosComponents/Doncella";
import { Nobleza } from "../artefactosComponents/Nobleza";



export const Barbara = (props) => {
	//Desestructurando props ya sabes... llegan del Link Dynamico (PersonajesBuild)
	const {personaje} = props;

	return (
		<>
			<div className="buildParticular__container">
				<h1>{personaje.rol1}</h1>

					<div className="buildParticular__armas-container">

						<h2>Armas⭐⭐⭐⭐⭐</h2>
						<Cuentos /> Es de 3 estrellas pero es la mejor para Barbara

						<h2>Armas⭐⭐⭐⭐</h2>

						<div className="buildParticular__armas" >
							<Prototipo />
							<Prototipo />
							<Prototipo />
							<Prototipo />
							<Prototipo />
					</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">
							<div className="buildParticular__artefactos-item">
							<Doncella /> x4
							</div>
							<div className="buildParticular__artefactos-item">
							<Nobleza />	x4
							</div>
							<div className="buildParticular__artefactos-item">
							<Doncella /> x2 <Nobleza /> x2
							</div>
						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-item">
						<h3>Copa</h3>
						<p>Vida</p>
					</div>	
					<div className="buildParticular__stat-item">
						<h3>Reloj</h3>
						<p>Recarga de Energía</p>
						<p>Vida</p>
					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>
						<p>Bono Curación</p>
					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>
						<p>Vida</p>
						<p>Vida</p>
						<p>Vida</p>
					</div>	
				</div>
			</div>
		</>
	);
};
