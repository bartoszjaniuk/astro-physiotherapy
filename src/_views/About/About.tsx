import React from "react";
import { Header } from "../../components/Header/Header";
import { SlideX } from "../../utils/animations/SlideX";

export const About = () => {
  return (
    <section className="container responsive-padding mx-auto h-full">
      <Header title="O mnie" />
      <div className="h-full flex flex-col-reverse md:flex-row">
        <SlideX from="left">
          <div className="h-full w-full flex flex-col gap-8 mt-4 md:mt-0">
            <p className="text-3xl">
              Jestem fizjoterapeutą specjalizującym się w pracy z pacjentami
              ortopedycznymi i sportowcami. W mojej codziennej pracy z pacjentem
              wykorzystuje techniki dokładnie ukierunkowane na jak najszybsze
              zniwelowanie dolegliwości i przyspieszenie regeneracji tkanek.
              Posługuję się terapią manualną, terapią tkanek miękkich,
              nowoczesną fizykoterapią oraz precyzyjnie dobranymi ćwiczeniami.
            </p>
          </div>
        </SlideX>
      </div>
    </section>
  );
};
