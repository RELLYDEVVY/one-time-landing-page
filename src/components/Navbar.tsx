import logoImg from "../assets/images/logosaas.png";
import menuIcon from "../assets/icons/menu.svg";
import { MobileNav } from "./MobileNav";
import { useState } from "react";

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<section className="py-4 bg-black relative">
			{open && <MobileNav open={open} setOpen={setOpen}/>}
			<div className="max-w-[100rem] mx-auto px-4">
				<div className="flex justify-between items-center text-white">
					<div className="relative ">
						<div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))] blur-md"></div>
						<img src={logoImg} alt="logo" className="w-12 h-12 relative" />
					</div>
					<div onClick={() => setOpen(!open)} className="cursor-pointer md:hidden border border-white/30 border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-md">
						<img src={menuIcon} alt="menu" className="" />
					</div>
					<nav className="hidden md:flex gap-x-6 items-center font-medium">
						<a className="text-white/60 hover:text-white transition cursor-pointer">About</a>
						<a className="text-white/60 hover:text-white transition cursor-pointer">Features</a>
						<a className="text-white/60 hover:text-white transition cursor-pointer">Updates</a>
						<a className="text-white/60 hover:text-white transition cursor-pointer">Help</a>
						<a className="text-white/60 hover:text-white transition cursor-pointer">Customers</a>
						<button className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer">Get for free</button>
					</nav>
				</div>
			</div>
		</section>
	);
};
