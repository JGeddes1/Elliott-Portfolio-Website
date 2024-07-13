import React from 'react'
import {motion} from 'framer-motion';
import '../style.css';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />

        </div>
        <div className="container">
        <div className='text-container'>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Eliott Young</span> </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>I work on architecture projects <br className='sm:block hidden' /> and build pretty houses</p>
        </div>

        </div>
        <div className="canvas-container">
          <ComputersCanvas/>
        </div>
        
      </div>
      



        </div>
        

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev>

            </motion.dev>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero