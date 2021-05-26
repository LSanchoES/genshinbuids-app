import React from 'react'
import { Aquila } from './armasComponents/espadaComponents/Aquila'
import { Cortador } from './armasComponents/espadaComponents/Cortador'
import { Descenso } from './armasComponents/espadaComponents/Descenso'
import { EspadaFavonius } from './armasComponents/espadaComponents/EspadaFavonius'
import { EspadaSacrificio } from './armasComponents/espadaComponents/EspadaSacrificio'
import { Espina } from './armasComponents/espadaComponents/Espina'
import { Flauta } from './armasComponents/espadaComponents/Flauta'
import { Hoja } from './armasComponents/espadaComponents/Hoja'
import { Negra } from './armasComponents/espadaComponents/Negra'
import { PenascoOscuro } from './armasComponents/espadaComponents/PenascoOscuro'
import { Rencor } from './armasComponents/espadaComponents/Rencor'
import { Rompemontanas } from './armasComponents/espadaComponents/Rompemontanas'
import { Rugido } from './armasComponents/espadaComponents/Rugido'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'
export const EspadaScreen = () => {
    return (
        <div>
            			<Header />
			<NavbarUi />
            <Aquila />
            <Cortador/>
            <Descenso/>
            <EspadaFavonius/>
            <EspadaSacrificio/>
            <Espina/>
            <Flauta/>
            <Hoja/>
            <Negra/>
            <PenascoOscuro/>
            <Rencor/>
            <Rompemontanas/>
            <Rugido/>
            <Footer />
        </div>
    )
}
