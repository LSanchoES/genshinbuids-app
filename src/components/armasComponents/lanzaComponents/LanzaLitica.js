import React, { useState } from 'react'
import {lanzaImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const LanzaLitica = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={lanzaImages(`./Lanza_Litica.png`).default}
                alt="Lanza Lítica"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Lanza Lítica
            </p>
            </ReactCardFlip>
        </div>
    )
}
