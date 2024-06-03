"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

import { Meteors } from "./ui/Meteors";


import {useTranslation} from 'react-i18next';
import '../src/i18n';
 
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/DirectionAwareHover";


import { catalogue } from "@/data";




const Catalogue = () => {

  const {t, i18n } = useTranslation();

    const imageUrl =
    "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHxtZWV0aW5nfGVufDB8fDB8fHww";



  return (
    <div className="py-20" id="catalogue">
      <h1 className="heading">
        {t('Просмотрите наш')}
        <span className="text-purple"> {t('Каталог')}</span>
      </h1>






      <div className="flex items-center flex-wrap justify-center p-4 gap-14 mt-10">


      {catalogue.map((item) => (

        <div className="lg:min-h-[22rem] md:h-[22rem] h-[15rem] flex items-center justify-center sm:w-80 w-[80vw]" key={item.id}>
        <DirectionAwareHover imageUrl={item.img}>
          <p className="font-bold text-[.8rem] md:text-2xl">{t(item.title)}</p>
          <p className="font-normal text-[.7rem] w-[12rem] md:w-72 md:text-sm">{t(item.des)}</p>
          <ul>
            <br />
            <p className="text-[0.65rem] md:text-sm">{t(item.additionalInfo?.title)}</p>
            <li className="text-[0.65rem] md:text-sm">{t(item.additionalInfo?.features?.first)}</li>
            <li className="text-[0.65rem] md:text-sm">{t(item.additionalInfo?.features?.second)}</li>
            <li className="text-[0.65rem] md:text-sm">{t(item.additionalInfo?.features?.third)}</li>
            <li className="text-[0.65rem] md:text-sm">{t(item.additionalInfo?.features?.fourth)}</li>
            <li className="text-[0.65rem] md:text-sm">{t(item.additionalInfo?.features?.fiveth)}</li>
            <li className="text-[0.65rem] md:text-sm">{t(item.additionalInfo?.features?.sixth)}</li>
          </ul>
        </DirectionAwareHover>
      </div>
      ))}

      </div>

    </div>
  );
};

export default Catalogue;