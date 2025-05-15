import React from "react";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/Sparkles";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full z-0"
        particleColor="#ACF3A0"
      />
      <div className="flex justify-center items-center h-full z-10 relative">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-white text-center">
          <p className="mb-6 uppercase tracking-widest text-md">
            futuristic designs & innovation
          </p>
          <TextGenerateEffect
            words="Turning your thoughts into Amazing Applications - Start Today!"
            className="mb-4 text-3xl lg:text-5xl font-bold font-mono"
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
