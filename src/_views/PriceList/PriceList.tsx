import { motion, type Variants } from "framer-motion";
import { Header } from "../../components/Header/Header";

type PriceList = {
	title: string;
	price: string;
	description?: string;
};

// Terapia manualna 120 zł
// (Krótki opis, czas trwania terapii 50min)

// 	⁃	Masaż 120 zł
// Krótki opis

// 	⁃	drenaż limfatyczny cena/czas trwania

// 	⁃	Elektrostymulacja za pomocą urządzenia compex cena/czas trwania

// 	⁃	fizjoterapia w domu pacjenta 180zl

const PRICE_LIST: PriceList[] = [
	{
		title: "Terapia manualna 50 min",
		price: "120 zł",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit doloremque fugiat beatae at architecto?",
	},
	{
		title: "Masaż (?) min",
		price: "120 zł",
		description: "rozluźnianie mięśni oraz powięzi",
	},
	{
		title: "Drenaż limfatyczn (?) min",
		price: "(?) zł",
		description: "",
	},
	{
		title: "Elektrostymulacja za pomocą urządzenia compex (?) min",
		price: "(?) zł",
		description: "urządzenia compex zapewnia elektrostymulacje co pomaga w...",
	},
	{
		title: "Fizjoterapia w domu pacjenta",
		price: "180 zł",
		description: "fizjoterapia z dojazdem do domu pacjenta",
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
