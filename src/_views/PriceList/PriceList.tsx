import { motion, type Variants } from "framer-motion";
import { Header } from "../../components/Header/Header";

type PriceList = {
	title: string;
	price: string;
	description?: string;
};

const PRICE_LIST: PriceList[] = [
	{
		title: "Wizyta fizjoterapeutyczna - około 60 min",
		price: "160 zł",
	},
	{
		title: "Masaż leczniczy - około 50 min",
		price: "160 zł",
	},
	{
		title: "Drenaż limfatyczny  kończyn dolnych NORMATEC - około 30 min",
		price: "60 zł",
	},
	{
		title: "Elektrostymulacja",
		price: "30 zł",
	},
	{
		title: "Fizjoterapia w domu pacjenta",
		price: "od 200 zł",
	},
];

const PriceListItem = ({ price, title, description }: PriceList) => {
	return (
		<motion.div variants={item} className="flex flex-col gap-7">
			<div className="flex gap-4">
				<div className="flex gap-4 w-full items-center">
					<h3 className="min-w-fit font-bold font-lct text-xl">{title}</h3>
					<span className="w-full h-[1px] bg-text"></span>
				</div>
				<p className="min-w-fit font-bold font-lct text-xl">{price}</p>
			</div>
			<p className="font-lct">{description}</p>
		</motion.div>
	);
};

export const PriceList = () => {
	return (
		<main className="w-full min-h-screen md:min-h-full max-h-full relative">
			<div className="container responsive-padding mx-auto pb-32">
				<Header title="Cennik" />
				<motion.section
					className="flex flex-col gap-8"
					variants={container}
					initial="hidden"
					animate="visible"
				>
					{PRICE_LIST.map((item, index) => (
						<PriceListItem key={index} {...item} />
					))}
				</motion.section>
			</div>
		</main>
	);
};

const container: Variants = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};
