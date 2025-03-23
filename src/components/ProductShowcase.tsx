import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
	return (
		<section className=" text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px]">
			<div className="container">
				<h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">Intuitive interface</h2>
				<p className="text-xl text-center text-white/70 mt-5 sm:max-w-xl mx-auto">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
				<img src={appScreen} alt="screen" className="mt-14 mx-auto"/>
			</div>
		</section>
	);
};
