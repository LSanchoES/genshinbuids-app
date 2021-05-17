import React, { useState } from 'react'
import {catalizadorImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Agata = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={catalizadorImages(`./Ágata_del_Peñasco_Oscuro.png`).default}
                alt="Ágata del peñasco Oscuro"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Ágata del peñasco Oscuro
            </p>
            </ReactCardFlip>
        </div>
    )
}
