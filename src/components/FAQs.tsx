import AccordionItems from "./AccordionItems";

const items = [
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
	},
	{
		question: "How does the pricing work for teams?",
		answer:
			"Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
	},
	{
		question: "Can I change my plan later?",
		answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
	},
	{
		question: "Is my data secure?",
		answer:
			"Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
	},
];

export const FAQs = () => {
	return (
		<section className=" text-white py-[72px] bg-gradient-to-b to-black from-[#5D2CA8] md:py-24">
			<div className="container ">
				<h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl"> Frequently asked questions</h2>
				<div className="mt-12 max-w-4xl mx-auto">
					{items.map(({ question, answer }, index) => (
						<AccordionItems question={question} answer={answer} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};
