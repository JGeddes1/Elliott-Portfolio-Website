import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Modal from 'react-modal';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Set the app element to avoid screen readers problems
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#1a1a1a', // Change this to match your design
    border: 'none',
    borderRadius: '10px',
  },
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onClick
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      onClick={onClick}  // Add onClick here
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            onClick={() => openModal(project)} 
          />
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Project Details"
        >
          <h2 className='text-white font-bold text-[24px]'>{selectedProject.name}</h2>
          <p className='mt-2 text-secondary text-[14px]'>{selectedProject.description}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {selectedProject.tags.map((tag) => (
              <p key={`${selectedProject.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[20px]'>Images</h3>
            <div className='mt-4 flex flex-wrap gap-2'>
              <img src={selectedProject.image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />
            </div>
          </div>
          <button onClick={closeModal} className='mt-5 text-white'>Close</button>
        </Modal>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
