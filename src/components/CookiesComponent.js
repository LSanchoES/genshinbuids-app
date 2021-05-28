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
      <div className="cookies__container">
			GenshinBuilds.es utiliza Cookies para más información visita nuestra política de privacidad,
      si permaneces en el sitio significa que las aceptas.
      </div>
      {" "}
		</CookieConsent>
	);
};
