import React from 'react'
import { Baculo } from './armasComponents/lanzaComponents/Baculo'
import { Caza } from './armasComponents/lanzaComponents/Caza'
import { Duelo } from './armasComponents/lanzaComponents/Duelo'
import { EspinaDragon } from './armasComponents/lanzaComponents/EspinaDragon'
import { Estelar } from './armasComponents/lanzaComponents/Estelar'
import { Halcon } from './armasComponents/lanzaComponents/Halcon'
import { LanzaFavonius } from './armasComponents/lanzaComponents/LanzaFavonius'
import { LanzaLitica } from './armasComponents/lanzaComponents/LanzaLitica'
import { LanzaPenasco } from './armasComponents/lanzaComponents/LanzaPenasco'
import { Perdicion } from './armasComponents/lanzaComponents/Perdicion'
import { Perforanubes } from './armasComponents/lanzaComponents/Perforanubes'
import { Pica } from './armasComponents/lanzaComponents/Pica'
import { Pua } from './armasComponents/lanzaComponents/Pua'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'
export const LanzaScreen = () => {
    return (
        <div>
            			<Header />
			<NavbarUi />
            <Baculo/>
            <Caza/>
            <Duelo/>
            <EspinaDragon/>
            <Estelar/>
            <Halcon/>
            <LanzaFavonius/>
            <LanzaLitica/>
            <LanzaPenasco/>
            <Perdicion/>
            <Perforanubes/>
            <Pica/>
            <Pua/>
            <Footer />
        </div>
    )
}
