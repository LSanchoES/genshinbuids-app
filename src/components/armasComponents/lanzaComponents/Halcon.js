import React, { useState } from 'react'
import {lanzaImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Halcon = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={lanzaImages(`./Halcon_de_Jade.png`).default}
                alt="Halcón de Jade"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Halcón de Jade
            </p>
            </ReactCardFlip>
        </div>
    )
}
