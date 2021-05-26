import React from 'react'
import { Arcaico } from './armasComponents/claymoreComponents/Arcaico'
import { Argento } from './armasComponents/claymoreComponents/Argento'
import { Desidia } from './armasComponents/claymoreComponents/Desidia'
import { GranFavonius } from './armasComponents/claymoreComponents/GranFavonius'
import { GranPenasco } from './armasComponents/claymoreComponents/GranPenasco'
import { GranSacrificio } from './armasComponents/claymoreComponents/GranSacrificio'
import { Lapida } from './armasComponents/claymoreComponents/Lapida'
import { Litica } from './armasComponents/claymoreComponents/Litica'
import { Medula } from './armasComponents/claymoreComponents/Medula'
import { Orgullo } from './armasComponents/claymoreComponents/Orgullo'
import { Pinos } from './armasComponents/claymoreComponents/Pinos'
import { Segadora } from './armasComponents/claymoreComponents/Segadora'
import { Sombra } from './armasComponents/claymoreComponents/Sombra'
import { Tiempo } from './armasComponents/claymoreComponents/Tiempo'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'
export const ClaymoreScreen = () => {
    return (
        <div>
            			<Header />
			<NavbarUi />
            <Arcaico />
            <Argento />
            <Desidia />
            <GranFavonius />
            <GranSacrificio />
            <Lapida />
            <Litica />
            <Medula />
            <Orgullo />
            <Pinos />
            <Segadora />
            <Sombra />
            <Tiempo /> 
            <GranPenasco />
            <Footer />
        </div>
    )
}
