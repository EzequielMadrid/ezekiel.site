import React from "react";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[20vh] w-[50vw] top-10 left-full"
          fill="lightgreen"
        />
        <Spotlight
          className="left-80 top-28 h-[70vh] w-[50vw]"
          fill="lightgreen"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      a
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="mb-6 uppercase tracking-widest text-md text-center max-w-90">
            futuristic designs & innovation
          </p>
          <TextGenerateEffect
            words="Turning your thoughts into Amazing Applications - Start Today!"
            className="mb-4 mx-auto text-3xl lg:text-5xl font-bold font-mono text-center"
          />
          <a href="#about">
            <MagicButton title="check it out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
