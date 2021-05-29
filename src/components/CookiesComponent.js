import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

export const CookiesComponent = () => {
	return (
		<CookieConsent
			location="bottom"
			buttonText="Aceptar"
			cookieName="Google_SEO"
			expires={150}
		>
      
		<p>	GenshinBuilds.es utiliza Cookies para el posicionamiento en Google, si quieres más información visita nuestra política de privacidad al pie de página,
      si permaneces en el sitio significa que las aceptas.
	  </p>
		<p>
	  <Link to='/privacidad' rel="nofollow"><h5>Política de privacidad</h5></Link>
	  </p>
		</CookieConsent>
	);
};
