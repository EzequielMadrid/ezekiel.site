/* eslint-disable @next/next/no-img-element */
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* background image */}
      <div className="w-full h-screen absolute left-0 -bottom-72 min-h-96">
        <img src="/grid.svg" alt="grid" className="w-full h-full opacity-90 " />
      </div>
      {/* end background image */}
      <div className="flex flex-col items-center">
        <h3 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-lime-300">A Jump </span> to the
          next level?
        </h3>
        <p className="text-lime-200 md:mt-10 my-5 text-center">
          Shoot me a message and let&apos;s chat about how I can help you Crush
          your Goals.
        </p>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2084 Ezequiel Madrid
        </p>
        <div className="mt-4 flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
