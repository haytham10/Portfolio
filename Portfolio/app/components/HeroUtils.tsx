'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroUtils = () => {
  return (
	<motion.div
		initial='hidden'
		animate='visible'
		className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
		>
		<div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start'>
			<motion.div
				variants={slideInFromTop}
				className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] m-auto md:m-0 opacity-[0.9]'
				>
					<SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
					<h1 className='Welcome-text text-[13px]'>
						FullStack Developer
					</h1>
			</motion.div>

			<motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Click...
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Clack...{" "}
            </span>
            FullStack
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
         and Software development.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-2 text-center text-white cursor-pointer m-auto mx-2 md:m-0 rounded-xl md:max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center circle hidden md:flex"
      >
		<div className="border-one"></div>
		<div className="border-two"></div>
		<Image
			src="/haytham.jpg"
			alt="profile image"
			height={350}
			width={350}
			className='z-[10] rounded-full'
		/>
      </motion.div>
	</motion.div>
  )
}

export default HeroUtils