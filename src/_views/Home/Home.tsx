import { ScrollDown } from "../../_ui/components/ScrollDown/ScrollDown";
import { useWindowUtils } from "./hooks/useWindowUtils";
import { motion, type Variants } from "framer-motion";
import { ScaleUp } from "../../utils/animations/ScaleUp";
import { Header } from "../../components/Header/Header";
import { SlideX } from "../../utils/animations/SlideX";
import { BOOKSY_URL } from "../../_constants/socialMedia";

export type Item = {
	id: number;
	imageSrc: string;
	description: string;
};

const Heading = ({
	title,
	slideFrom = "left",
}: {
	title: string;
	slideFrom?: "left" | "right" | "none";
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

	return slideFrom === "none" ? (
		<h1 className="text-7xl md:text-9xl lg:text-9xl xl:text-8xl 2xl:text-9xl z-20">
			{title}
		</h1>
	) : (
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
				<div className="h-full w-full flex items-end lg:pl-32 z-10 sm:pt-0 ">
					<img
						// className="w-full h-auto md:h-[60%] xl:h-[90%] lg:pr-32 object-contain z-20"
						className="w-full h-auto md:h-[60%] xl:h-[90%] object-contain z-20"
						src="assets/homepage.png"
					/>
				</div>
				<div className="hidden xl:block absolute top-96 w-5/6 left-0 right-0 mx-auto h-full md:w-[700px] lg:-right-96 lg:mx-0 lg:left-auto">
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
						<Heading title="Trębacz" slideFrom="none" />
					</div>

					<div className="bg-transparent absolute top-28 right-5 md:right-0 md:top-[13%] lg:right-16 xl:top-[35%] xl:right-4 2xl:top-[40%] 2xl:right-[-10%] responsive-padding">
						<Heading title="Fizjoterapia" slideFrom="none" />
					</div>

					<div className="bg-transparent absolute w-full top-52 md:top-80 lg:top-[30%] xl:w-96 2xl:top-[40%] responsive-padding z-10">
						<ScaleUp>
							<Description
								text="Nasze podejście łączy nowoczesną wiedzę medyczną, doświadczenie kliniczne oraz indywidualne podejście do każdego pacjenta.
Niezależnie od tego,czy zmagasz się z bólem kręgosłupa, wracasz do formy po kontuzji, czy potrzebujesz specjalistycznej terapii - jesteśmy tu, by Ci pomóc."
							/>
						</ScaleUp>
					</div>

					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="absolute hidden bg-transparent w-56 md:block md:bottom-64 md:right-4 lg:w-80 xl:w-56 xl:left-4 xl:bottom-16 2xl:w-60 2xl:bottom-32 z-50 cursor-pointer "
					>
						<ScaleUp>
							<motion.a href={BOOKSY_URL}>
								<img
									className="w-full h-auto bg-transparent z-50"
									src={`assets/${
										screenBreakpoint === "md" || screenBreakpoint === "lg"
											? "napiszdomniertl"
											: "napiszdomnieltr"
									}.png`}
								/>
							</motion.a>
						</ScaleUp>
					</motion.div>
				</div>
				{/* <div className="hidden xl:block absolute bottom-[20%] right-[20%] z-50">
					<ScrollDown
						onClick={() => {
							const element = document.getElementById("przed-wizyta");
							if (!element) return;
							element.scrollIntoView({ behavior: "smooth" });
						}}
					/>
				</div> */}
			</main>
			<section className="w-full h-60 bg-gray-200">
				<div className="relative container responsive-padding mx-auto flex justify-center items-center h-60 ">
					<svg
						className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 text-primary"
						fill="currentColor"
						viewBox="0 0 32 32"
					>
						<path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3-.3 2.8-2.7 5.3-5.7 5.3v4c5.5 0 10-4.5 10-10V8h-8zm16 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3-.3 2.8-2.7 5.3-5.7 5.3v4c5.5 0 10-4.5 10-10V8h-8z" />
					</svg>
					<blockquote className="text-3xl md:text-3xl xl:text-4xl">
						Każdy pacjent jest inny - dlatego każda terapia jest dopasowana do
						Ciebie.
					</blockquote>
				</div>
			</section>
			<section
				id="o-mnie"
				className="container responsive-padding mx-auto h-ful pb-32"
			>
				<Header title="O mnie" />
				<div className="h-full flex flex-col-reverse md:flex-row">
					<SlideX from="left">
						<div className="h-full w-full flex flex-col gap-8 mt-4 md:mt-0">
							<p className="text-3xl">
								Jestem fizjoterapeutą specjalizującym się w pracy z pacjentami
								ortopedycznymi i sportowcami. W mojej codziennej pracy z
								pacjentem wykorzystuje techniki dokładnie ukierunkowane na jak
								najszybsze zniwelowanie dolegliwości i przyspieszenie
								regeneracji tkanek. Posługuję się terapią manualną, terapią
								tkanek miękkich, nowoczesną fizykoterapią oraz precyzyjnie
								dobranymi ćwiczeniami.
							</p>
						</div>
					</SlideX>
				</div>
			</section>
		</>
	);
};
