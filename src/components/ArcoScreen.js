import React from 'react'
import { Acorde } from './armasComponents/arcoComponents/Acorde'
import { Alas } from './armasComponents/arcoComponents/Alas'
import { Amos } from './armasComponents/arcoComponents/Amos'
import { Cazador } from './armasComponents/arcoComponents/Cazador'
import { Elegia } from './armasComponents/arcoComponents/Elegia'
import { Esmeralda } from './armasComponents/arcoComponents/Esmeralda'
import { Favonius } from './armasComponents/arcoComponents/Favonius'
import { Herrumbre } from './armasComponents/arcoComponents/Herrumbre'
import { Luna } from './armasComponents/arcoComponents/Luna'
import { Oda } from './armasComponents/arcoComponents/Oda'
import { Penasco } from './armasComponents/arcoComponents/Penasco'
import { Real } from './armasComponents/arcoComponents/Real'
import { Sacrificio } from './armasComponents/arcoComponents/Sacrificio'

export const ArcoScreen = () => {
    return (
        <div>
            <Acorde />
            <Alas />
            <Amos />
            <Cazador />
            <Elegia />
            <Esmeralda />
            <Favonius />
            <Herrumbre />
            <Luna />
            <Oda />
            <Penasco />
            <Real />
            <Sacrificio />
        </div>
    )
}
