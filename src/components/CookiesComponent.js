import React from "react";
import CookieConsent from "react-cookie-consent";

export const CookiesComponent = () => {
	return (
		<CookieConsent
			location="bottom"
			buttonText="Aceptar"
			cookieName="Google_SEO"
			expires={150}
		>
      
			GenshinBuilds.es utiliza Cookies para el posicionamiento en Google, si quieres más información visita nuestra política de privacidad al pie de página,
      si permaneces en el sitio significa que las aceptas.
      
      {" "}
		</CookieConsent>
	);
};
