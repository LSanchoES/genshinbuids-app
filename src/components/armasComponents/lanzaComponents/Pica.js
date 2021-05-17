import React, { useState } from 'react'
import {lanzaImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Pica = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={lanzaImages(`./Pica_Luna_Creciente.png`).default}
                alt="Pica Luna Creciente"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Pica Luna Creciente
            </p>
            </ReactCardFlip>
        </div>
    )
}
