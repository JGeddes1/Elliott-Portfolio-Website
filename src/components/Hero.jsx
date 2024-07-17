import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import '../style.css'; // Ensure this path is correct

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <ComputersCanvas />
      <div className='absolute inset-0 flex items-center justify-center p-5 z-10'>
        <div className='text-center'>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className='text-[#6D9886]'>Eliott Young</span>
          </h1>
          <p className={`${styles.heroSubText} text-black-100 mt-2`}>
            Architectural Technologist 
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#6D9886] border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-[#6D9886] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
