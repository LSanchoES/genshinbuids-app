import React, { useState } from 'react'
import {claymoreImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Segadora = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={claymoreImages(`./Segadora_de_la_Lluvia.png`).default}
                alt="Segadora de la LLuvia"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Segadora de la LLuvia
            </p>
            </ReactCardFlip>
        </div>
    )
}
