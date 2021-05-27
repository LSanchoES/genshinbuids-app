import React from 'react'
import { Agata } from './armasComponents/catalizadorComponents/Agata'
import { Candado } from './armasComponents/catalizadorComponents/Candado'
import { Carta } from './armasComponents/catalizadorComponents/Carta'
import { Codice } from './armasComponents/catalizadorComponents/Codice'
import { Cuentos } from './armasComponents/catalizadorComponents/Cuentos'
import { Frio } from './armasComponents/catalizadorComponents/Frio'
import { Grimorio } from './armasComponents/catalizadorComponents/Grimorio'
import { Memorias } from './armasComponents/catalizadorComponents/Memorias'
import { Ojo } from './armasComponents/catalizadorComponents/Ojo'
import { Oracion } from './armasComponents/catalizadorComponents/Oracion'
import { Pergamino } from './armasComponents/catalizadorComponents/Pergamino'
import { Perla } from './armasComponents/catalizadorComponents/Perla'
import { Prototipo } from './armasComponents/catalizadorComponents/Prototipo'
import { Sinfonia } from './armasComponents/catalizadorComponents/Sinfonia'
import { Vino } from './armasComponents/catalizadorComponents/Vino'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'


export const CatalizadoresScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />
				<h1 className="armasScreen-title animate__animated animate__fadeIn">Catalizadores</h1>
				<div className="artefactosScreen__tip animate__animated animate__fadeIn">
					<p>
						Solo se muestran las armas 5⭐y 4⭐ (y cuento de dragones 3⭐)
						ya que son estas son las que mayor potencial tienen 
						y las que se usan en las builds más poderosas.
						(Recuerda que los valores de los efectos de las armas aumentan
						cuando las refinas)
					</p>
				</div>

			<div className="artefactosScreen__container animate__animated animate__fadeIn">
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Agata/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
						Daño Crítico
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Al derrotar a un enemigo, aumenta el ATQ en 12% durante 30s, pudiéndose acumular hasta 3 veces. La duración de cada acumulación es independiente.
						</p>
					</section>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
