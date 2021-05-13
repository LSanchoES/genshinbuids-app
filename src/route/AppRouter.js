import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import { PersonajeBuild } from '../components/PersonajeBuild';
import { PersonajesScreen } from '../components/PersonajesScreen';



export const AppRouter = () => {


    return (
        <Router>
            <div>
                <Switch>                     
                    <Route exact path="/" component={ PersonajesScreen } />
                    <Route exact path="/personaje/:personajeName" component={ PersonajeBuild } />
                </Switch>
            </div>
        </Router>
    )
}