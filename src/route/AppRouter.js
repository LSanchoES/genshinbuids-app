import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import { ArcoScreen } from '../components/ArcoScreen';
import { ArtefactosScreen } from '../components/ArtefactosScreen';
import { CatalizadoresScreen } from '../components/CatalizadoresScreen';
import { ClaymoreScreen } from '../components/ClaymoreScreen';
import { EspadaScreen } from '../components/EspadaScreen';
import { LanzaScreen } from '../components/LanzaScreen';
import { PersonajeBuild } from '../components/PersonajeBuild';
import { PersonajesScreen } from '../components/PersonajesScreen';



export const AppRouter = () => {


    return (
        <Router>
            <div>
                <Switch>                     
                    <Route exact path="/" component={ PersonajesScreen } />
                    <Route exact path="/artefactos" component={ ArtefactosScreen } />
                    <Route exact path="/catalizadores" component={ CatalizadoresScreen } />
                    <Route exact path="/lanzas" component={ LanzaScreen } />
                    <Route exact path="/espadas" component={ EspadaScreen } />
                    <Route exact path="/claymores" component={ ClaymoreScreen } />
                    <Route exact path="/arcos" component={ ArcoScreen } />
                    <Route exact path="/personaje/:personajeName" component={ PersonajeBuild } />
                </Switch>
            </div>
        </Router>
    )
}