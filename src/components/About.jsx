import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion"


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
I am a friendly, reliable, and trustworthy individual who enjoys working in a team and on my own.

I enjoy sport and presently rotate membership of four climbing gyms, depending on my location. In the past, I have played rugby and was on two teams repersenting my school and local rugby club where I played “lock” position. I have also enjoyed rowing, and during my first year at university represented Leeds Beckett in a team rowing competion. All of  these sports have helped me to develop team building skills; the ability to make quick-fire decisions; improved my communication skills; kept me fit and provided a social scene.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((services,index) => (
        <ServiceCard key={services.title} index= {index} {...services}/>
      ))}
    </div>
    </>
    
  )
}

export default SectionWrapper(About, "about")