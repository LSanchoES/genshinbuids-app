import React, { useState } from 'react'
import {artefactosImages} from "../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Petra = () => {
    const [isFliped, setIsFliped] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={artefactosImages(`./petra.png`).default}
                alt="Petra arcaica"
                className="artefactos__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="artefactos__text"
            >
                Petra Arcáica   
            </p>
            </ReactCardFlip>
        </div>
    )
}
