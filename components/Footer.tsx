'use client'
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Ready to order our <span className="text-purple">top</span> quality products? 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Press the button below and get in touch with our managers <br /> through the e-MAIL (tsp@gmail.com)
        </p>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHFDhSxpbDRgksmJdrvQkMHFfNqcqNMcCkbMqtBhNgdMptZVMPXJNQFblPKpNFlCzxSBV" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            width="50"
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 N IT
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;