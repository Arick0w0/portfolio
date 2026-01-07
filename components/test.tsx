"use client";

import React from "react";
import Image from "next/image";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import Avatar from "../public/images/image.jpg";
export function ThreeDCardDemo() {
  return (
    <div className='border border-white/[0.1] flex flex-col items-start max-w-sm mx-auto p-6 relative h-[30rem] rounded-3xl bg-zinc-900/50 backdrop-blur-sm'>
      <Icon className='absolute h-6 w-6 -top-3 -left-3 text-white' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 text-white' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 text-white' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 text-white' />
      <div className='relative w-full h-48 rounded-2xl overflow-hidden mb-4'>
        <Image src={Avatar} alt='Profile' fill className='object-cover' />
      </div>

      <EvervaultCard>
        <Image
          src={`${
            process.env.NODE_ENV === "production" ? "/portfolio" : ""
          }/images/image.jpg`}
          alt='Profile'
          fill
          className='object-cover rounded-full'
        />
      </EvervaultCard>

      <h2 className='text-white mt-4 text-sm font-light'>
        Passionate Mobile Developer crafting seamless cross-platform experiences
        with Flutter. Focused on clean architecture and scalable solutions.
      </h2>
      <p className='text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5'>
        Flutter & Dart Specialist
      </p>
    </div>
  );
}
