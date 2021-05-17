import React, { useState } from 'react'
import {arcoImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Esmeralda = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={arcoImages(`./Arco_Esmeralda_de_la_Cazadora.png`).default}
                alt="Arco Esmeralda de la Cazadora"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Arco Esmeralda de la Cazadora
            </p>
            </ReactCardFlip>
        </div>
    )
}
