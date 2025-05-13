import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl text-white'>
      <div className="text border-t-2 border-b-2 border-zinc-500 flex overflow-hidden  whitespace-nowrap">
        <motion.h1 initial={{x:'0%'}} animate={{x:'-100%'}} transition={{repeat: Infinity, ease: 'linear', duration: 5}} className='text-[9vw] leading-none uppercase -mb-[3vw] pr-20 font-semibold'>We are ochi</motion.h1>
        <motion.h1 initial={{x:'0%'}} animate={{x:'-100%'}} transition={{repeat: Infinity, ease: 'linear', duration: 5}} className='text-[9vw] leading-none uppercase -mb-[3vw] pr-20 font-semibold'>We are ochi</motion.h1>
        <motion.h1 initial={{x:'0%'}} animate={{x:'-100%'}} transition={{repeat: Infinity, ease: 'linear', duration: 5}} className='text-[9vw] leading-none uppercase pr-20 font-semibold'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee