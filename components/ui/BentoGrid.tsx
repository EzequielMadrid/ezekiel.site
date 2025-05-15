"use client";

// import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
// import Lottie from "react-lottie"
//! import Lottie "react-lottie" is deprecated
import Lottie from "./LottieWrapper";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "madridezequiel299@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-lime-900 dark:shadow-lg dark:bg-black dark:border-lime-800 bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "#030D00",
        backgroundColor:
          "linear-gradient(90deg, rgba(8,36,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5     ">
          <div className="mt-2 p-2 md:max-w-96 md:text-xs lg:text-base font-serif text-sm text-lime-200 z-10">
            {description}
          </div>
          <div
            className={`w-fit px-2 font-mono text-sm lg:text-md max-w-96 font-bold z-10 rounded-lg  ${
              id === 3
                ? "p-2 text-lime-200 border border-lime-900"
                : " bg-lime-100 text-lime-700"
            }`}
          >
            {title}
          </div>
          {/*3D gitHub world */}
          {id === 2 && <GlobeDemo />}
          {/* stuff */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* techStack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                {["AWS", "docker", "Jenkins"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                  lg:opacity-75 rounded-lg text-center bg-[#5C8055]"
                  >
                    {item}
                  </span>
                ))}
                <span className=" py-4 px-3 rounded-lg text-center bg-[#5C8055]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                {["Azure", "Kubernetes", "GitLab"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                  lg:opacity-90 rounded-lg text-center bg-[#5C8055]"
                  >
                    {item}
                  </span>
                ))}
                <span className=" py-4 px-3 rounded-lg text-center bg-[#5C8055]"></span>
              </div>
            </div>
          )}
          {/* lottie and confetti */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: "xMidyMid slice" },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
