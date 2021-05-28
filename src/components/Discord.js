import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavbarUi } from "./NavbarUi";

export const Discord = () => {
	return (
		<>
			<Header />
			<NavbarUi />
			<div className="personajeBuild__container animate__animated animate__fadeIn">
				<div className="personajeBuild__tip">
					<p>
						<i>
							Sientete libre de unirte a nuestra comunidad de Discord en la que
							publicamos noticias frecuentemente sobre Genshin Impact. Además
							encontrarás una amplia comunidad en la que conocerás gente de todo el
							mundo con la que conversar y jugar.
						</i>
					</p>
				</div>
				<div className="discord__card animate__animated animate__fadeIn">
					<div className="discord-frame">
						<iframe
                            title="discord-iframe"
							src="https://discord.com/widget?id=761500349781114880&theme=dark"
							width="500"
							height="500"
							allowtransparency="true"
							frameBorder="0"
							sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
						></iframe>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
