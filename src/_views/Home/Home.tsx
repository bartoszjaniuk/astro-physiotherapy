import { Header } from "../../components/Header/Header";
import { useWindowUtils } from "./hooks/useWindowUtils";

const Heading = ({ title }: { title: string }) => (
	<h1 className="text-7xl md:text-9xl lg:text-9xl xl:text-8xl 2xl:text-9xl z-20">
		{title}
	</h1>
);

const Description = ({ text }: { text: string }) => (
	<p className="text-xl md:text-3xl xl:text-2xl bg-transparent">{text}</p>
);

const Card = ({
	isInverted = false,
	imageSrc,
	description,
}: {
	isInverted?: boolean;
	imageSrc: string;
	description: string;
}) => {
	const styles = `${
		isInverted ? "bg-primary text-white" : "bg-text text-white md:-rotate-2"
	}`;

	return (
		<div
			className={`flex flex-col gap-4 w-full md:w-[272px] lg:w-[400px] lg:h-full h-full md:h-[354px] xl:w-[272px] xl:h-[354px] border rounded-lg p-4 ${styles}`}
		>
			<img src={imageSrc} alt="todo" />
			<p className="text-center text-4xl">{description}</p>
		</div>
	);
};

export const Home = () => {
	const screenBreakpoint = useWindowUtils();
	console.log({ screenBreakpoint });

	return (
		<>
			<main className="w-full min-h-screen h-[calc(100vh-96px)] md:min-h-full max-h-full relative">
				<div className="h-full w-full flex items-end lg:pl-32 z-10 sm:pt-0 ">
					<img
						className="w-full h-auto lg:h-[55%] xl:h-[80%] object-contain"
						src="assets/homepage.png"
					/>
				</div>
				<div className="container mx-auto h-full w-full absolute top-0 left-0 right-0 bg-transparent ">
					<div className="bg-transparent absolute top-5 left-5 lg:left-16 xl:left-0 xl:top-[10%] 2xl:top-[25%] responsive-padding">
						<Heading title="Trębacz" />
					</div>

					<div className="bg-transparent absolute top-28 right-5 md:right-0 md:top-[13%] lg:right-16 xl:top-[35%] xl:right-16 2xl:top-[40%] 2xl:right-[10%] responsive-padding">
						<Heading title="Fizjoterapia" />
					</div>

					<div className="bg-transparent absolute w-full top-52 md:top-80 lg:top-[30%] xl:w-96 2xl:top-[40%] responsive-padding">
						<Description text="Specjalizuje się w diagnostyce, leczeniu i zapobieganiu problemom ruchowym poprzez terapię manualną, ćwiczenia i techniki fizykalne, pomagając pacjentom w poprawie ich mobilności i jakości życia." />
					</div>

					<div className="absolute hidden bg-transparent w-56 md:block md:bottom-64 md:right-4 lg:w-80 xl:w-56 xl:left-4 xl:bottom-16 2xl:w-60 2xl:bottom-32">
						<img
							className="w-full h-auto bg-transparent "
							src={`assets/${
								screenBreakpoint === "md" || screenBreakpoint === "lg"
									? "napiszdomniertl"
									: "napiszdomnieltr"
							}.png`}
						/>
					</div>
				</div>
			</main>

			<div className="w-full flex flex-col h-full ">
				<Header title="Przed wizytą" />
				<div className="container  rounded-lg responsive-padding mx-auto flex flex-wrap gap-12 py-4 md:py-32 justify-center  items-center">
					<Card imageSrc="assets/cd.png" description="Wyniki badań" />
					<Card isInverted imageSrc="assets/towel.png" description="Ręcznik" />
					<Card imageSrc="assets/cloth.png" description="Wygodny strój" />
					<Card
						isInverted
						imageSrc="assets/shoe.png"
						description="Obuwie zmienne"
					/>
				</div>
				<div className="rounded-lg container responsive-padding mx-auto flex items-center justify-center pb-32">
					<p className="text-2xl md:text-3xl xl:text-4xl p-4">
						Postaraj jak najlepiej przygotować się do wizyty. Zabierz ze sobą
						badania na plycie CD, lub innym nośniku pamięci. Koniecznie weź ze
						sobą ręcznik, wygodny strój, który nie będzie krępowal ruchow, oraz
						obuwie zmienne.
					</p>
				</div>
			</div>
		</>
	);
};
