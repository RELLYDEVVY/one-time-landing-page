import plusIcon from "../assets/icons/plus.svg";

export const MobileNav = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
	return (
		<div className="flex flex-col border border-white/10 absolute bg-black/80 backdrop-blur-lg text-white top-2 right-2 h-[50vh] z-100 w-[70vw] rounded-xl">
			<div onClick={() => setOpen(!open)} className=" place-self-end flex  mr-2 mt-3">
				<img className="rotate-45 h-10 w-10" src={plusIcon} alt="" />
			</div>
			<nav className=" flex-col flex gap-y-4 px-4 font-medium flex-1 mt-8">
				<a className="text-white/60 hover:text-white transition cursor-pointer">About</a>
				<a className="text-white/60 hover:text-white transition cursor-pointer">Features</a>
				<a className="text-white/60 hover:text-white transition cursor-pointer">Updates</a>
				<a className="text-white/60 hover:text-white transition cursor-pointer">Help</a>
				<a className="text-white/60 hover:text-white transition cursor-pointer mb-2">Customers</a>
        <hr />
				<button className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer mt-3">Get for free</button>
			</nav>
		</div>
	);
};
