import React, { useState } from 'react'
import {espadaImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const EspadaFavonius = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={espadaImages(`./Espada_de_Favonius.png`).default}
                alt="Espada de Favonius"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Espada de Favonius
            </p>
            </ReactCardFlip>
        </div>
    )
}
