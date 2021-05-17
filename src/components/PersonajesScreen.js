import React, { useEffect, useState } from "react";
import { armasBasicosArray, elementosArray } from "../data/dataArrays";
import { personajes } from "../data/personajes";
import {
	basicosImages,
	elementosImages,
	portraitImages,
} from "../helpers/images";
import {Link} from "react-router-dom";
import { NavbarUi } from "./NavbarUi";


export const PersonajesScreen = () => {
  
	const [listaPersonajes, setListaPersonajes] = useState(personajes);
	const [isActive, setIsActive] = useState(false); 
	const activeClass = document.querySelector('.active')

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

		if(e.target.className === 'active'){
			e.target.classList.remove('active')
			setListaPersonajes(personajes)

		}else{
		activeClass !== null ?
		activeClass.classList.remove('active')
		: console.log('');

		e.target.classList.add('active');

		setListaPersonajes(
		personajes.filter((item) => item.element.includes(e.target.alt))
		)}
	}
//ARMAS
	const handleWeaponSelector = (e) => {
		setIsActive(!isActive);

		if(e.target.className === 'active'){
			e.target.classList.remove('active')
			setListaPersonajes(personajes)

		}else{
		activeClass !== null ?
		activeClass.classList.remove('active')
		: console.log('');

		e.target.classList.add('active');

		setListaPersonajes(
		personajes.filter((item) => item.weapon.includes(e.target.alt))
		)}
	};
//EFECTO PARA REFRESH DE CLASES 
	useEffect(() => {
	}, [isActive])


//Las importaciones de imagenes llevan .default porque las encapsula por defecto...
	return (
		<>	
		<div className="pS__container ">
			<h1>GenshinBuilds</h1>
			<NavbarUi />
			<div className="pS__form">
				<input
					onChange={handleInputChange}
					type="text"
					placeholder="Busca un personaje"
				/>
			</div>

			
				{elementosArray.map((items) => (
					<div className="pS__selector-elementos" key={items}>
						<img	
							onClick={handleElementSelector}
							src={elementosImages(`./${items}.png`).default}
							alt={items}
						/>
					</div>
				))}

				{armasBasicosArray.map((items) => (
					<div className="pS__selector-armas" key={items}>
						<img	
		
							onClick={handleWeaponSelector}
							src={basicosImages(`./${items}.png`).default}
							alt={items}
						/>
					</div>
				))}
		

			<div className="pS__personajes-div">
				{listaPersonajes.map((personaje) => (
					<>
					<Link 
						 to={{
							pathname: `./personaje/${personaje.name}`,
							state: {personaje}
						}}
						 style={{ textDecoration: 'none' }}
						 key={personaje.id}
						 >
					<div className="pS__personaje-card animate__animated animate__fadeIn animate__slow" >

						<h2 className={personaje.element}>
							{personaje.name}
						</h2>
						<img
							src={portraitImages(`./${personaje.name}.jpg`).default}
							alt={personaje.name}
							className="pS__personaje-thumbnail"
							/>
					</div>
					</Link>
					</>
				))}
			</div>
		</div>	
		</>
	);
};
