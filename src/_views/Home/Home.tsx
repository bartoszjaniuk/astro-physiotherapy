import { ScrollDown } from "../../_ui/components/ScrollDown/ScrollDown";
import { Header } from "../../components/Header/Header";
import { useWindowUtils } from "./hooks/useWindowUtils";
import { motion, type Variants } from "framer-motion";
import { ScaleUp } from "../../utils/animations/ScaleUp";
import { AnimatedList } from "../../utils/animations/AnimatedList";

export type Item = {
	id: number;
	imageSrc: string;
	description: string;
};

const items: Item[] = [
	{ id: 1, imageSrc: "assets/cd.png", description: "Wyniki badań" },
	{ id: 2, imageSrc: "assets/towel.png", description: "Ręcznik" },
	{ id: 3, imageSrc: "assets/cloth.png", description: "Wygodny strój" },
	{ id: 4, imageSrc: "assets/shoe.png", description: "Obuwie zmienne" },
];

const Heading = ({
	title,
	slideFrom = "left",
}: {
	title: string;
	slideFrom?: "left" | "right";
}) => {
	const slide = slideFrom === "left" ? -300 : 300;
	const variants: Variants = {
		hidden: { opacity: 0, scale: 0, x: slide },
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				duration: 0.9,
				ease: [0.17, 0.55, 0.55, 1],
				delay: 0.5,
			},
		},
	};

	return (
		<motion.h1
			initial="hidden"
			animate="visible"
			variants={variants}
			className="text-7xl md:text-9xl lg:text-9xl xl:text-8xl 2xl:text-9xl z-20"
		>
			{title}
		</motion.h1>
	);
};

const Description = ({ text }: { text: string }) => (
	<p className="text-xl md:text-3xl xl:text-2xl bg-transparent">{text}</p>
);

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const Home = () => {
	const screenBreakpoint = useWindowUtils();

	return (
		<>
			<main className="w-full min-h-screen h-[calc(100vh-96px)] md:min-h-full max-h-full relative">
				<div className="h-full w-full flex items-end lg:pl-32 z-10 sm:pt-0">
					<img
						className="w-full h-auto lg:h-[55%] xl:h-[80%] object-contain z-20"
						src="assets/homepage.png"
					/>
				</div>
				<div className="hidden lg:block absolute top-96 w-5/6 left-0 right-0 mx-auto h-full md:w-[700px] lg:-right-96 lg:mx-0 lg:left-auto">
					<motion.img
						className="w-full z-10"
						src="/assets/ccircle.svg"
						initial={{ scale: 1 }}
						animate={{
							scale: [1.1, 1.2, 1.1],
						}}
						transition={{
							duration: 10,
							ease: "linear",
							repeat: Infinity,
							stiffness: 40,
							repeatType: "loop",
						}}
					/>
				</div>

				<div className="container mx-auto h-full w-full absolute top-0 left-0 right-0 bg-transparent ">
					<div className="bg-transparent absolute top-5 left-5 lg:left-16 xl:left-0 xl:top-[10%] 2xl:top-[25%] responsive-padding">
						<Heading title="Trębacz" />
					</div>

					<div className="bg-transparent absolute top-28 right-5 md:right-0 md:top-[13%] lg:right-16 xl:top-[35%] xl:right-16 2xl:top-[40%] 2xl:right-[10%] responsive-padding">
						<Heading slideFrom="right" title="Fizjoterapia" />
					</div>

					<div className="bg-transparent absolute w-full top-52 md:top-80 lg:top-[30%] xl:w-96 2xl:top-[40%] responsive-padding z-10">
						<ScaleUp>
							<Description text="Specjalizuje się w diagnostyce, leczeniu i zapobieganiu problemom ruchowym poprzez terapię manualną, ćwiczenia i techniki fizykalne, pomagając pacjentom w poprawie ich mobilności i jakości życia." />
						</ScaleUp>
					</div>

					<div className="absolute hidden bg-transparent w-56 md:block md:bottom-64 md:right-4 lg:w-80 xl:w-56 xl:left-4 xl:bottom-16 2xl:w-60 2xl:bottom-32">
						<ScaleUp>
							<img
								className="w-full h-auto bg-transparent "
								src={`assets/${
									screenBreakpoint === "md" || screenBreakpoint === "lg"
										? "napiszdomniertl"
										: "napiszdomnieltr"
								}.png`}
							/>
						</ScaleUp>
					</div>
				</div>
				<div className="hidden xl:block absolute bottom-[20%] right-[20%] z-50">
					<ScrollDown
						onClick={() => {
							const element = document.getElementById("przed-wizyta");
							if (!element) return;
							element.scrollIntoView({ behavior: "smooth" });
						}}
					/>
				</div>
			</main>

			<div className="w-full flex flex-col h-full" id="przed-wizyta">
				<Header title="Przed wizytą" />
				<AnimatedList
					className="container rounded-lg responsive-padding mx-auto flex flex-wrap gap-12 py-4 md:py-32 justify-center items-center"
					items={items}
				/>

				<div className="rounded-lg container responsive-padding mx-auto flex items-center justify-center pb-32">
					<ScaleUp>
						<p className="text-2xl md:text-3xl xl:text-4xl p-4">
							Postaraj jak najlepiej przygotować się do wizyty. Zabierz ze sobą
							badania na plycie CD, lub innym nośniku pamięci. Koniecznie weź ze
							sobą ręcznik, wygodny strój, który nie będzie krępowal ruchow,
							oraz obuwie zmienne.
						</p>
					</ScaleUp>
				</div>
			</div>
		</>
	);
};
