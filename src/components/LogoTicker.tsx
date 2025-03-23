import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from "motion/react";

const images = [
	{ src: acmeLogo, alt: "Acme Logo" },
	{ src: quantumLogo, alt: "Quantum Logo" },
	{ src: echoLogo, alt: "Echo Logo" },
	{ src: celestialLogo, alt: "Celestial Logo" },
	{ src: pulseLogo, alt: "Pulse Logo" },
	{ src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
	return (
		<section className="bg-black text-white py-[72px] sm:py-24">
			<div className="container ">
				<h2 className="text-xl text-center text-white/60">Trusted by the world's most innovative teams</h2>
				<div className="relative overflow-hidden before:content-[' '] after:content-[' '] before:w-20 before:absolute after:absolute after:h-full before:h-full after:w-20 before:left-0 after:right-0 before:bg-[linear-gradient(to_right,#000_10%,transparent)] after:bg-[linear-gradient(to_left,#000_10%,transparent)]  flex gap-16 mt-9">
					<motion.div className="flex flex-none gap-16 pr-16" initial={{ translateX: 0 }} animate={{ translateX: "-50%" }} transition={{ duration: 25, ease: "linear", repeat: Infinity }}>
						{images.map(({ src, alt }, index) => (
							<img className="flex-none h-12 w-auto" key={index} src={src} alt={alt}></img>
						))}
						{images.map(({ src, alt }, index) => (
							<img className="flex-none h-12 w-auto" key={index} src={src} alt={alt}></img>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
