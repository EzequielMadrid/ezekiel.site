"use client";

/* eslint-disable @next/next/no-img-element */
import { PinContainer } from "./ui/3dPin";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id="projects" className="relative py-20">
      {/* background image */}
      <div className="w-full absolute top-0 min-h-96">
        <img src="/grid.svg" alt="grid" className="w-full h-full opacity-90 " />
      </div>
      {/* end background image */}
      <h1 className="heading">
        My <span className="text-lime-500">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:h-[40rem] sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <img
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-lime-500 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Demo
                  </p>
                  <FaLocationArrow className="ms-3" color="#505F00" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
