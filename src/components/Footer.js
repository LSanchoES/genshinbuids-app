import React from 'react'

export const Footer = () => {

    const handleGoUp = () => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="foot__container">

           <h3 className="foot__go-up" onClick={handleGoUp}>Volver Arriba</h3> 
        </div>
    )
}
