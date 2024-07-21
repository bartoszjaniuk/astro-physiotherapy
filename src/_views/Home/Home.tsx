import { useWindowUtils } from "./hooks/useScreenMd";

const Heading = ({ title }: { title: string }) => (
	<h1 className="text-7xl md:text-9xl lg:text-9xl xl:text-8xl 2xl:text-9xl z-20 bg-transparent">
		{title}
	</h1>
);

const Description = ({ text }: { text: string }) => (
	<p className="text-xl md:text-3xl xl:text-2xl bg-transparent">{text}</p>
);

export const Home = () => {
	const screenBreakpoint = useWindowUtils();

	return (
		<main className="w-full min-h-screen h-[calc(100dvh-96px)] relative">
			<div className="h-full w-full flex items-end lg:pl-32 z-10">
				<img
					className="w-full h-auto lg:h-[55%] xl:h-[80%] object-contain"
					src="assets/homepage.png"
				/>
			</div>
			<div className="container mx-auto h-full w-full absolute top-0 left-0 right-0 bg-transparent">
				<div className="bg-transparent absolute top-5 left-5 lg:left-16 xl:left-0 xl:top-[10%] 2xl:top-[25%] responsive-padding">
					<Heading title="Trębacz" />
				</div>

				<div className="bg-transparent absolute top-28 right-5 md:right-0 md:top-[13%] lg:right-16 xl:top-[35%] xl:right-16 2xl:top-[40%] 2xl:right-[10%] responsive-padding">
					<Heading title="Fizjoterapia" />
				</div>

				<div className="bg-transparent absolute w-full top-56 md:top-80 lg:top-[30%] xl:w-96 2xl:top-[40%] responsive-padding">
					<Description text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " />
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
	);
};
