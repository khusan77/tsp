"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

import { Meteors } from "./ui/Meteors";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const RecentProjects = () => {
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "@khusan_ns";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div className="py-20" id="contacts">
      <h1 className="heading">
        Our 
        <span className="text-purple">Contacts</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="Location"
              href="https://localhost:3000"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24000.274678623493!2d69.182161!3d41.24281!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzI2LjciTiA2OcKwMTEnMTMuMCJF!5e0!3m2!1sru!2sus!4v1716976796328!5m2!1sru!2sus" width="400" height="300" loading="lazy"></iframe>                </div>

              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {/* {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))} */}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Location
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>


            </PinContainer>


          </div>
        ))}

        <div className="w-full relative max-w-xs md:mt-10">
          {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Contacts
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Galvanized steel: +998 94 672 40 00
            </p>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Rolled metal: +998 93 554 98 98
            </p>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Profiles: +998 99 720 17 17
            </p>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Pipe products: +998 90 109 09 09
            </p>

            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
              </div>
            <MagicButton
                title={copied ? "Username is Copied!" : "Copy our telegram username"}
                icon={<IoCopyOutline />}
                width="50"
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
              </div>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
 

      </div>

    </div>
  );
};

export default RecentProjects;