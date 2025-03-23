import emojiImage from "../assets/images/emojistar.png";
import helixImage from "../assets/images/helix2.png";

export const CallToAction = () => {
	return (
		<section className="bg-black text-white py-[72px] md:py-24 overflow-x-clip relative">
			<div className="container ">
				<img className="md:block hidden absolute top-40 left-[calc(100%-120px)]" src={helixImage} alt="helix" />
				<img className="md:block hidden absolute -top-[80px] right-[calc(100%-150px)]" src={emojiImage} alt="emoji" />
				<h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">Get instant access</h2>
				<p className="mt-5 text-xl text-white/70 max-w-xl mx-auto text-center">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
				<form action="" className="mt-10 flex flex-col gap-2.5 justify-center sm:flex-row max-w-lg mx-auto">
					<input type="email" placeholder="my-mail.com" className="bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] h-12 sm:flex-1" />
					<button className="bg-white text-black font-bold text-lg h-12 rounded-lg px-6">Get access</button>
				</form>
			</div>
		</section>
	);
};
