"use client";

import Image from 'next/image'
import me from '@/public/images/me.png'
import { motion } from 'framer-motion'
import React from 'react'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center m-auto sm:mb-0'>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div 
          initial={{opacity:0, scale: 0}}
          animate={{ opacity:1, scale:1 }}
          transition={{
            type:"tween",
            duration: 0.2
          }}
          >
            <Image
              src={me}
              alt="Carlos profile"
              width={192}
              height={192}
              quality="95"
              className='rounded-full h-28 w-28 border-[0.35rem] object-cover shadow-xl border-white'
              priority={true}
            />
          </motion.div>
          <motion.div
            className='absolute bottom-0 right-0 text-4xl b'
            initial={{opacity:0, scale: 0}}
            whileHover={{ rotate: 20 }}
            animate={{ opacity:1, scale:1 }}
            transition={{
              type:"spring",
              stiffness: 250,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.div>
        </div>
      </div>
        
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Olá mundo, meu nome é Carlos.</span> Eu sou{" "}
        <span className="font-bold">Desenvolvedor Full-Stack</span> with{" "}
        <span className="font-bold">2 anos</span> de experiência. Construindo
        soluções <span className="italic">inovadoras e conscientes</span>. Meu foco é{" "}
        <span className="underline">NodeJs + Next JS(Node + Next.js)</span>.
      </motion.h1>
    </section>
  )
}
