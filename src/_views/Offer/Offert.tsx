import { Header } from "../../components/Header/Header";
import { SlideX } from "../../utils/animations/SlideX";
import { SlideY } from "../../utils/animations/SlideY";

type Props = {
  sectionTitle: string;
  sectionDesc: string;
  listTitle: string;
  items: string[];
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
        {/* <p className="text-2xl">{sectionDesc}</p> */}
      </SlideX>
      <div
        className={`flex flex-col md:flex-row ${
          videoPlacement === "left" ? "md:flex-row-reverse" : null
        }`}
      >
        <SlideY className="w-full p-4">
          <p>{listTitle}</p>
          <ul className="list-disc p-4">
            {items.map((item, index) => (
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
          sectionTitle="Kompleksowa terapia kregoslupa"
          sectionDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
						excepturi aliquam sed aperiam sint. Vel et eum hic ipsum quia
						voluptate optio saepe accusamus repellat nobis, cupiditate totam
						dolor. Laborum dignissimos nisi laboriosam atque molestiae? Quasi
						quo sit maxime nam ipsa, vitae, modi aperiam ipsum molestias veniam
						ipsam natus eaque est quis fuga ut beatae! Est impedit porro
						excepturi quia?"
          listTitle=""
          items={[
            "bóle przeciążeniowe",
            "ból miejscowy",
            "dyskopatia",
            "rwa kulszowa",
            "bóle mięśniowe",
            "bóle promieniujące do kończyn górnych i dolnych",
            "bóle promieniujące do pośladków/bioder",
            "bóle w okolicach łopatki",
            "bóle promieniujące do głowy",
            "bóle stawowe",
          ]}
        />
        <Section
          videoPlacement="left"
          sectionTitle="Rehabilitacja pourazowa"
          sectionDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
						excepturi aliquam sed aperiam sint. Vel et eum hic ipsum quia
						voluptate optio saepe accusamus repellat nobis, cupiditate totam
						dolor. Laborum dignissimos nisi laboriosam atque molestiae? Quasi
						quo sit maxime nam ipsa, vitae, modi aperiam ipsum molestias veniam
						ipsam natus eaque est quis fuga ut beatae! Est impedit porro
						excepturi quia?"
          listTitle=""
          items={[
            "rehabilitacja po skręceniu, złamaniu stawu skokowego",
            "naciągnięcia więzadeł",
            "naderwania więzadeł",
            "zerwania więzadeł",
            "łokieć golfisty/tenisisty",
            "zapalenie Achillesa",
            "urazy stawu kolanowego",
            "uszkodzenia stożka rotatorów barku",
            "konflikt udowo panewkowy",
          ]}
        />
        <Section
          sectionTitle="Rehabilitacja sportowa"
          sectionDesc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
						excepturi aliquam sed aperiam sint. Vel et eum hic ipsum quia
						voluptate optio saepe accusamus repellat nobis, cupiditate totam
						dolor. Laborum dignissimos nisi laboriosam atque molestiae? Quasi
						quo sit maxime nam ipsa, vitae, modi aperiam ipsum molestias veniam
						ipsam natus eaque est quis fuga ut beatae! Est impedit porro
						excepturi quia?"
          listTitle=""
          items={[
            "prewencja urazów",
            "rehabilitacja pourazowa",
            "pomoc przy jak najszybszym powrocie do uprawiania sportu",
            "odpowiedni dobór ćwiczeń do urazu",
            "drenaż limfatyczny (opis)",
            "rzyspieszenie regeneracji",
            "elektrostymulacja za pomocą profesjonalnego urzadzenia compex",
          ]}
        />
      </div>
    </main>
  );
};
