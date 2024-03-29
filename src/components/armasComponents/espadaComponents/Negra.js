import React, { useState } from 'react'
import {espadaImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Negra = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={espadaImages(`./Espada_Negra.png`).default}
                alt="Espada Negra"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Espada Negra
            </p>
            </ReactCardFlip>
        </div>
    )
}
