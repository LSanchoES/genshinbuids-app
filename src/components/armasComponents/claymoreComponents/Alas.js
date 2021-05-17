import React, { useState } from 'react'
import {claymoreImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Alas = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={claymoreImages(`./Alas.png`).default}
                alt="Alas"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Alas
            </p>
            </ReactCardFlip>
        </div>
    )
}
