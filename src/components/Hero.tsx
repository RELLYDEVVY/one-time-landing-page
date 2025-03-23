import arrowImg from "../assets/icons/arrow-right.svg";
import cursor from "../assets/images/cursor.png";
import message from "../assets/images/message.png";
import { motion } from "motion/react";
export const Hero = () => {
	return (
		<section className=" h-[calc(100%-100px)] overflow-hidden relative bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42,#200D42,#4F21A1,#A46EDB)] py-[72px]">
			<div className="absolute w-[calc(100vw+600px)] md:w-[calc(100vw+90vw)]  h-[705px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_89%,#9560EB)] blur-[2px] top-[calc(100%-110px)]"></div>
			<div className="container relative">
				<div className=" flex justify-center items-center ">
					<a href="#" className="border-white/30 border py-1 px-2 rounded-lg inline-flex gap-x-2">
						<span className="bg-[linear-gradient(to_right,rgb(252,_214,_255),rgb(41,_216,_255),rgb(255,_253,_128),rgb(248,_154,_191),rgb(252,_214,_255))] text-white/40 bg-clip-text ">
							Version 2.0 is here
						</span>
						<span>
							Read more <img className="inline ml-1 hover:ml-3" src={arrowImg} alt="" />
						</span>
					</a>
				</div>
				<div className="flex justify-center mt-8">
					<div className="relative inline-flex">
						<h1 className="text-7xl sm:text-9xl font-bold tracking-tighter  text-center inline-flex ">
							One Task <br />
							at a time
						</h1>
						<motion.div drag dragSnapToOrigin className="cursor-pointer w-fit h-fit absolute left-[496px] top-[56px] hidden sm:inline">
							<img draggable="false" className=" h-[200px] w-[200px]  max-w-none" src={message} alt="message" />
						</motion.div>
						<motion.div drag dragSnapToOrigin className="cursor-pointer absolute right-[476px] top-[108px] hidden sm:inline">
							<img draggable="false" className="  h-[200px] w-[200px] max-w-none" src={cursor} alt="cursor" />
						</motion.div>{" "}
					</div>
				</div>
				<p className="text-xl mt-8 text-center max-w-md mx-auto">
					Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
				</p>
				<button className="flex justify-center items-center bg-white text-black font-bold px-5 py-3 rounded-lg mt-8 mx-auto">Get for free</button>
			</div>
		</section>
	);
};
