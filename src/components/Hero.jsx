import React from 'react';
import HeroImage from '../assets/pp.jpg';
import CV from '../assets/cv.pdf'; 

const Hero = () => {
  return (
    <div className='bg-gray-500 text-white text-center py-16'>
      <img
        src={HeroImage}
        alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Awoke
        </span>
        , Electrical and Computer Engineering Student, Currently internship at CodeAlpha as frontend developer
      </h1>

      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Contact Me
        </button>
        
        <a href={CV} download="Awoke_CV.pdf">
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
