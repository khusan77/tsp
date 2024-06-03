"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";


import { Fragment } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'




import { useTranslation } from 'react-i18next';
import '../../src/i18n';






export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  
  
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  interface Person {
    id: number;
    code: string;
    avatar: string;
  }

  const people: Person[] = [
    // {
    //   id: 0,
    //   code: 'in',
    //   avatar:
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzY-YffBAe9pxAWh1pYt9IHSYPDnoa6ydHOp8LK3ppKskt2gs75ZTUi0UC3k90UF6teU&usqp=CAU',
    // },  
    {
        id: 1,
        code: 'ru',
        avatar:
        'https://cdn.countryflags.com/thumbs/russia/flag-round-250.png',
      },
      {
        id: 2,
        code: 'uz',
        avatar:
          'https://static.vecteezy.com/system/resources/previews/016/328/589/original/uzbekistan-flat-rounded-flag-icon-with-transparent-background-free-png.png',
      },
  ];





  

  const [selected, setSelected] = useState(people[0])

  const { t, i18n } = useTranslation();
  const languages = [
    { code: 'ru', name: 'Русский язык' },
    { code: 'uz', name: 'O\'zbek tili' },
  ]





  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });



  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto sm:px-10 px-2 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >






        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className="text-xs sm:text-sm !cursor-pointer">{t(navItem.name)}</span>
          </Link>
        ))}



        
<Listbox value={selected} onChange={setSelected}>
    {({ open }) => (
      <>
        <div className="relative mt-1.5 w-8 h-4">


          <ListboxButton className="relative w-full rounded-md py-0.5 pl-1 pr-1 shadow-sm focus:outline-none">
            
            
            <span className="flex items-center">
              {selected?.avatar && (
                <img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
              )}
            </span>


          </ListboxButton>

          <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              
              
              {people.map((person) => (


                <ListboxOption
                  key={person.id}
                  className={({ focus }) =>
                    classNames(
                      focus ? 'bg-[#10132E] text-white' : '',
                      !focus ? 'text-gray-900' : '',
                      'relative cursor-default select-none py-2 pl-0.5 pr-1'
                    )
                  }
                  value={person}
                >


                      <div className="flex items-center" onClick={() => i18n.changeLanguage(person.code)}
                  key={person.code}>
                        <img src={person.avatar} alt="" className="h-6 w-6 rounded-full" />
                      </div>
                </ListboxOption>


              ))}




            </ListboxOptions>
          </Transition>
        </div>
      </>
    )}
  </Listbox>

            {/* {
              languages.map((language) => (
                <button
                  onClick={() => i18n.changeLanguage(language.code)}
                  key={language.code}
                >
                  {language.name}
                </button>
              ))
            } */}





          {/* remove this login btn */}
          {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};