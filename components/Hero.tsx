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
      {/* background image */}
      <div className="w-full absolute top-0 min-h-96">
        <img src="/grid.svg" alt="grid" className="w-full h-full opacity-90 " />
      </div>
      {/* end background image */}
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
