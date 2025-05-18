import React from "react";
import { Boxes } from "./ui/BackgroundBoxes";
import { cn } from "@/lib/utils";

const Approach = () => {
  return (
    <div
      id="approach"
      className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg bg-[#111A07]"
    >
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none font-mono bg-[#111A07]" />

      <Boxes />
      <h2
        className={cn(
          "p-2 relative z-20 rounded-lg text-center md:text-3xl text-xl font-bold text-lime-700 bg-lime-100"
        )}
      >
        Software System Architecture
      </h2>
      <p className="max-w-96 relative mt-6 z-20 px-4 rounded-sm text-center text-md text-lime-100 bg-[#111A07] ">
        We will colaborate to map out your project&apos;s concepts. Security is
        built-in—not an afterthought—so your workflows stay safe while you focus
        on innovation.{" "}
        <span className="font-serif text-sm">
          Solutions for the Future | Powered Apps | High-performance Databases.
        </span>
      </p>
    </div>
  );
};

export default Approach;
