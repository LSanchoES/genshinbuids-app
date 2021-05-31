import React, { Fragment, useState } from "react";
import { armasBasicosArray, elementosArray } from "../data/dataArrays";
import { personajes } from "../data/personajes";
import {
	basicosImages,
	elementosImages,
	portraitImages,
} from "../helpers/images";
import { Link } from "react-router-dom";
import { NavbarUi } from "./NavbarUi";
import { Header } from "./Header";
import { Footer } from "./Footer";



export const PersonajesScreen = () => {
	const [listaPersonajes, setListaPersonajes] = useState(personajes);
	const [isActive, setIsActive] = useState(false);
	const activeClass = document.querySelector(".active");

	//BUSCADOR
	const handleInputChange = (e) => {
		const value = e.target.value.toLowerCase();
		const result = personajes.filter((item) =>
			item.name.toLowerCase().includes(value)
		);

		setListaPersonajes(result);
	};
	//ELEMENTOS
	const handleElementSelector = (e) => {
		setIsActive(!isActive);

		if (e.target.className === "active") {
			e.target.classList.remove("active");
			setListaPersonajes(personajes);
		} else {
			activeClass !== null
				? activeClass.classList.remove("active")
				: console.log("");

			e.target.classList.add("active");

			setListaPersonajes(
				personajes.filter((item) => item.element.includes(e.target.alt))
			);
		}
	};
	//ARMAS
	const handleWeaponSelector = (e) => {
		setIsActive(!isActive);

		if (e.target.className === "active") {
			e.target.classList.remove("active");
			setListaPersonajes(personajes);
		} else {
			activeClass !== null
				? activeClass.classList.remove("active")
				: console.log("");

			e.target.classList.add("active");

			setListaPersonajes(
				personajes.filter((item) => item.weapon.includes(e.target.alt))
			);
		}
	};
	//EFECTO PARA REFRESH DE CLASES

	//Las importaciones de imagenes llevan .default porque las encapsula por defecto...

	return (
		<>

			
			<div className="pS__container  ">
				<Header />
				<NavbarUi />

				<div className="pS__form animate__animated animate__fadeIn">
					<input
						onChange={handleInputChange}
						type="text"
						placeholder="Busca un personaje"
					/>
				</div>

				<div className="pS__selectores">
					{elementosArray.map((items) => (
						<div
							className="pS__selector-elementos animate__animated animate__fadeIn"
							key={items}
						>
							<img
								onClick={handleElementSelector}
								src={elementosImages(`./${items}.png`).default}
								alt={items}
							/>
						</div>
					))}

					{armasBasicosArray.map((items) => (
						<div
							className="pS__selector-armas animate__animated animate__fadeIn"
							key={items}
						>
							<img
								onClick={handleWeaponSelector}
								src={basicosImages(`./${items}.png`).default}
								alt={items}
							/>
						</div>
					))}
				</div>
				<div className="pS__personajes-div">
					{listaPersonajes.map((personaje) => (
						<Fragment key={personaje.id}>
							<Link
								to={{
									pathname: `./personaje/${personaje.name}`,
									state: { personaje },
								}}
								style={{ textDecoration: "none" }}
							>
								<div className="pS__personaje-card animate__animated animate__fadeIn">
									<h2 className={personaje.element}>{personaje.name}</h2>
									<img
										className="pS__personaje-thumbnail animate__animated animate__fadeIn"
										src={portraitImages(`./${personaje.name}.png`).default}
										alt={personaje.name}
									/>
								</div>
							</Link>
						</Fragment>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};
