import { Header } from "../../components/Header/Header";
import { SlideX } from "../../utils/animations/SlideX";
import { SlideY } from "../../utils/animations/SlideY";

type Props = {
	sectionTitle: string;
	sectionDesc?: string;
	listTitle?: string;
	items?: string[];
	videoPlacement?: "left" | "right";
};

const Section = ({
	items,
	sectionTitle,
	listTitle,
	sectionDesc,
	videoPlacement = "right",
}: Props) => {
	return (
		<section className="flex flex-col">
			<SlideX className="flex flex-col gap-4 p-4">
				<h1 className="text-5xl">{sectionTitle}</h1>
				{sectionDesc ? <p className="text-2xl">{sectionDesc}</p> : null}
			</SlideX>
			<div
				className={`flex flex-col md:flex-row ${
					videoPlacement === "left" ? "md:flex-row-reverse" : null
				}`}
			>
				<SlideY className="w-full p-4">
					<p>{listTitle}</p>
					<ul className="list-disc p-4">
						{items?.map((item, index) => (
							<li key={index}>
								<p className="text-2xl">{item}</p>
							</li>
						))}
					</ul>
				</SlideY>
				{/* <SlideX from="right" className="w-full h-[450px] relative">
					<div className="video-bg rounded-lg bg-white opacity-100 z-10">
						<video className="video-content" muted loop autoPlay controls>
							<source src="assets/videos/vid.mp4" type="video/mp4" />
							Przeglądarka nie jest wspierana.
						</video>
					</div>
				</SlideX> */}
			</div>
		</section>
	);
};

export const Offer = () => {
	return (
		<main className="w-full min-h-screen md:min-h-full max-h-full relative">
			<div className="container responsive-padding mx-auto pb-32 flex flex-col gap-8">
				<Header title="Oferta" />
				<Section
					sectionTitle="FIZJOTERAPIA ORTOPEDYCZNA"
					items={[
						"bóle kręgosłupa (lędźwiowego, piersiowego, szyjnego)",
						"stany po urazach i operacjach ortopedycznych",
						"zespoły przeciążeniowe, np. tokieć tenisisty, kolano biegacza",
					]}
				/>
				<Section
					videoPlacement="left"
					sectionTitle="TERAPIA MANUALNA"
					items={[
						"mobilizacje i manipulacje stawowe",
						"techniki tkanek miękkich",
						"terapia punktów spustowych",
					]}
				/>
				<Section
					sectionTitle="REHABILITACJA PO URAZACH I OPERACJACH"
					items={[
						"programy powrotu do sprawności po rekonstrukcji ACL, artroskopii, złamaniach",
						"indywidualne protokoły usprawniania",
					]}
				/>
				<Section
					sectionTitle="TRENING FUNKCJONALNY"
					sectionDesc="ćwiczenia dostosowane do wieku, stylu życia i celu terapii prewencja nawrotów bólu i kontuzji"
				/>
				<Section
					sectionTitle="EDUKACJA PACJENTA"
					items={[
						"nauka ergonomii, korekcji postawy, profilaktyki przeciążeń",
						"wspieranie samodzielności w terapii",
					]}
				/>
			</div>
		</main>
	);
};
