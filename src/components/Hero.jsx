import React from 'react'
import {motion} from 'framer-motion';
import '../style.css';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]  mx-auto flex flex-row items-start gap-5`}>
      <div className="container">
      <ComputersCanvas />
      <div className="overlay">
        <h1>Hello, I'm Adrian</h1>
        <p>I develop 3D visuals, user interfaces and web applications</p>
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