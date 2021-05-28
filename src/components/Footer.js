import React from 'react'
import { Link } from 'react-router-dom';
import { CookiesComponent } from './CookiesComponent';

export const Footer = () => {

    const handleGoUp = () => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    return (
        
        <div className="foot__container">

           <h3 className="foot__go-up" onClick={handleGoUp}>Volver Arriba</h3>

           <div className="foot__sections">

                <section>
                    <p>Esta página web ha sido diseñada y creada 
                        completamente por el creador de contenido 
                        digital Lorenzo Sancho (Alias: Vristok) 
                        para más información pulsa‏‏‎ ‎ 
                       
                       <a href="https://lsancho.es/"
                         target="_blank"
                         rel="noopener noreferrer"
                         > 
                         aquí</a>
                    </p>
                </section>
                <section>
                    <p>
                       GenshinBuilds es independiente de miHoyo, es solamente una web confeccionada para ayudar a los jugadores Hispanohablantes de Genshin Impact.
                    </p>
                </section>
                <section>
                    <p>
                        Si tienes alguna sugerencia o necesitas ayuda contacta con el WebMaster mediante discord: Vristok #6007
                    </p>
                    
                </section>

           </div>
           <div className="politica-privacidad">

                <Link to='/privacidad'><h5>Política de privacidad</h5></Link>

           </div>
           <CookiesComponent />
        </div>
        
    )
}
