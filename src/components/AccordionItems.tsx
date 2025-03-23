import { useState } from "react";
import plusIcon from "../assets/icons/plus.svg";
import minusIcon from "../assets/icons/minus.svg";
import { AnimatePresence, motion } from "motion/react";

const AccordionItems = ({ question, answer }: { question: string; answer: string }) => {
	const [show, setshow] = useState(true);

	return (
		<div className="py-7 border-b border-white/20 cursor-pointer  text-lg md:text-xl" onClick={() => setshow(!show)}>
			<div className=" flex items-center">
				<span className="font-bold flex-1">{question}</span>
				<img className="" src={show ? plusIcon : minusIcon} alt="icon" />
			</div>
			<AnimatePresence>
				{!show && (
					<motion.div
						initial={{ opacity: 0, height: 0, marginTop: 0 }}
						animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
						exit={{ opacity: 0, height: 0, marginTop: 0 }}
						className={show ? "hidden" : ""}
					>
						{answer}
					</motion.div>
				)}
			</AnimatePresence>{" "}
		</div>
	);
};

export default AccordionItems;
