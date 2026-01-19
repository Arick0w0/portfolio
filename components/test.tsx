"use client";

import React from "react";
import Image from "next/image";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function ThreeDCardDemo() {
  return (
    <div className='border border-white/[0.1] flex flex-col items-start w-full max-w-xs sm:max-w-sm mx-auto p-4 sm:p-6 relative h-auto min-h-[26rem] sm:min-h-[30rem] rounded-2xl sm:rounded-3xl bg-zinc-900/50 backdrop-blur-sm'>
      <Icon className='absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 sm:-top-3 -left-2.5 sm:-left-3 text-white' />
      <Icon className='absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 sm:-bottom-3 -left-2.5 sm:-left-3 text-white' />
      <Icon className='absolute h-5 w-5 sm:h-6 sm:w-6 -top-2.5 sm:-top-3 -right-2.5 sm:-right-3 text-white' />
      <Icon className='absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2.5 sm:-bottom-3 -right-2.5 sm:-right-3 text-white' />
      {/* <div className='relative w-full h-40 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4'>
        <Image
          src='/images/image.jpg'
          alt='Profile'
          fill
          className='object-cover'
        />
      </div> */}

      <EvervaultCard>
        <Image
          src='/images/image.jpg'
          alt='Profile'
          fill
          priority
          className='object-cover rounded-full'
        />
      </EvervaultCard>

      <h2 className='text-white mt-3 sm:mt-4 text-xs sm:text-sm font-light leading-relaxed'>
        Passionate Mobile Developer crafting seamless cross-platform experiences
        with Flutter. Focused on clean architecture and scalable solutions.
      </h2>
      <p className='text-xs sm:text-sm border font-light border-white/[0.2] rounded-full mt-3 sm:mt-4 text-white px-2 py-0.5'>
        Flutter & Dart Specialist
      </p>
    </div>
  );
}
