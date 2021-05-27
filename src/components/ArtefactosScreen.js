import React from "react";
import { Bruja } from "./artefactosComponents/Bruja";
import { Caballeria } from "./artefactosComponents/Caballeria";
import { Corazon } from "./artefactosComponents/Corazon";
import { Corredor } from "./artefactosComponents/Corredor";
import { Domador } from "./artefactosComponents/Domador";
import { Doncella } from "./artefactosComponents/Doncella";
import { Errante } from "./artefactosComponents/Errante";
import { Furia } from "./artefactosComponents/Furia";
import { Geoarmada } from "./artefactosComponents/Geoarmada";
import { Gladiador } from "./artefactosComponents/Gladiador";
import { Llamas } from "./artefactosComponents/Llamas";
import { Nobleza } from "./artefactosComponents/Nobleza";
import { Petra } from "./artefactosComponents/Petra";
import { Retroceso } from "./artefactosComponents/Retroceso";
import { Sombraverde } from "./artefactosComponents/Sombraverde";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavbarUi } from "./NavbarUi";


export const ArtefactosScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />

			<div className="artefactosScreen__container">
			
			<div className="artefactosScreen__card">
				<div className="artefactosScreen__sections">
					<section>
					<Bruja/>
					</section>
				<section>
					<h3>2 Piezas</h3>
					<p>
						bkjasdbkjasbfljasbfkjlasbfkasbfkas
						jbfbkjasbfkjasbfkabkfbajskbfakjsb
						fkjasbfkjas
					</p>
				</section>
				<section>
					<h3>4 Piezas</h3>
					<p>
						ñsmfñlasmfñlkasmflñasm
						asmssssssssssssssss
						sssssssssssssssssssssssssssssssss
						ssssssssssssssssssnñafnñagnñaskgnñaksgn
						ñaskngñaksngñasngñasgnñkasgnañskngñasnfñka
						snñfknasñnaljdsf
						,na fkajfbqwkj
					</p>
				</section>
				</div>
			</div>
			<Caballeria/>
			<Corazon/>
			<Corredor/>
			<Errante/>
			<Doncella/>
			<Domador/>
			<Furia/>
			<Geoarmada/>
			<Gladiador/>
			<Llamas/>
			<Nobleza/>
			<Petra/>
			<Retroceso/>
			<Sombraverde/>
			</div>
			<Footer />
		</>
	);
};
