import { motion } from "framer-motion";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../_constants/socialMedia";
import { Header } from "../../components/Header/Header";
import { ScaleUp } from "../../utils/animations/ScaleUp";
import { SlideX } from "../../utils/animations/SlideX";
import { SlideY } from "../../utils/animations/SlideY";

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5120.298945010764!2d18.19736239745383!3d50.08348828609741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47116805a0be8eb5%3A0xe8362cb409eec0ef!2sAkademia%20Fitness%20(Ocicka)!5e0!3m2!1sen!2spl!4v1722093596094!5m2!1sen!2spl"
    width="100%"
    height="650"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

type ListProps = {
  title: string;
  items: string[];
};

const List = ({ title, items }: ListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-4xl font-semibold pb-2">{title}</h5>
      <ul className="list-none">
        {items.map((item, index) => (
          <li key={index}>
            <p className="text-3xl">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialMedia = () => (
  <div className="flex flex-col">
    <li className="list-none flex gap-4">
      <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a href={INSTAGRAM_URL}>
          <img width={42} src="/assets/ig.svg" alt="Profil Instagram" />
        </a>
      </motion.ul>
      <motion.ul whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a href={FACEBOOK_URL}>
          <img width={42} src="/assets/fb.svg" alt="Profile Facebook" />
        </a>
      </motion.ul>
    </li>
  </div>
);

export const Contact = () => {
  return (
    <main className="w-full md:min-h-full max-h-full relative">
      <section className="container responsive-padding mx-auto h-full">
        <Header title="Kontakt" />
        <div className="h-full flex flex-col-reverse md:flex-row">
          <SlideX from="left">
            <div className="h-full w-full flex flex-col gap-8 mt-4 md:mt-0">
              <p className="text-3xl">
                Czy chcesz pozbyć się bólu i odzyskać pełną sprawność?
                Potrzebujesz wsparcia w rehabilitacji po kontuzji? Masz pytania
                dotyczące ćwiczeń lub terapii? Śmiało, napisz do mnie! Odpowiem
                tak szybko, jak to możliwe i pomogę Ci wrócić do pełni zdrowia.
              </p>

              <List
                title="Dane kontaktowe:"
                items={[
                  "Akademia Fitness",
                  "ul. Ocicka 4",
                  "47-400 Racibórz",
                  "Numer telefonu",
                  "+ 48 515 693 553",
                ]}
              />
              <SocialMedia />

              <div className="flex flex-col gap-2">
                <h5 className="text-4xl font-semibold pb-2">Współpracuję z:</h5>
                <a
                  className="pt-4 cursor-pointer"
                  href="https://akademia-fitness.eu"
                >
                  <img src="/assets/akademia_fitness.png" alt="logo" />
                </a>
              </div>
            </div>
          </SlideX>
          {/* <ScaleUp>
						<img
							className="rounded-lg"
							src="https://cdn.pixabay.com/photo/2021/05/29/01/55/physical-therapy-6292316_1280.jpg"
							alt="Zdjęcie męzczyzny"
						/>
					</ScaleUp> */}
        </div>
      </section>
      <SlideY from="bottom" duration={0.6}>
        <Map />
      </SlideY>
    </main>
  );
};
