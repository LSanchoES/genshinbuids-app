import React, { useState } from 'react'
import {artefactosImages} from "../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Sombraverde = () => {
    const [isFliped, setIsFliped] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={artefactosImages(`./sombraverde.png`).default}
                alt="Sombra Verde Esmeralda"
                className="artefactos__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="artefactos__text"
            >
                Sombra Verde Esmeralda   
            </p>
            </ReactCardFlip>
        </div>
    )
}
