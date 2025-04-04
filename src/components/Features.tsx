import ecosystemImg from "../assets/icons/ecosystem.svg";
const features = [
	{
		title: "Integration Ecosystem",
		description: "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
	},
	{
		title: "Goal Setting and Tracking",
		description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
	},
	{
		title: "Secure Data Encryption",
		description: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
	},
];

export const Features = () => {
	return (
		<section className="bg-black text-white py-[72px] lg:py-[92px]">
			<div className="container ">
				<h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
				<div className="max-w-2xl mx-auto">
					<p className="text-xl text-white/70 mt-5 text-center">
						Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
					</p>
				</div>
				<div className="mt-16 flex flex-col gap-4 lg:flex-row flex-1">
					{features.map(({ title, description }, index) => (
						<div className="border border-white/30 px-5 py-10 text-center rounded-xl" key={index}>
							<div className="bg-white text-black inline-flex h-14 w-14 justify-center items-center rounded-xl">
								<img className="" src={ecosystemImg} alt="" />
							</div>
							<h3 className="mt-6 text-bold"> {title}</h3>
							<p className="mt-2 text-white/70">{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
