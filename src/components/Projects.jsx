import React from 'react';
import ts from '../assets/textToSpeech.png'
import campusRide from '../assets/campusRide.png'
import pms from '../assets/pms.png'
const projectsData = [
  {
    title: 'Text to Speech',
    imgSrc: '../assets/TS.webp',
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/',
  },
  {
    title: 'Project Two',
    imgSrc: './assets/project-2.png',
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/',
  },
  {
    title: 'Project Three',
    imgSrc: './assets/project-3.png',
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/',
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-black my-4">Projects</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">

          <div className="bg-blue-300 transition-transform duration-300 hover:scale-105 border border-gray-300 p-5 rounded-xl shadow-lg" >
            <div className="overflow-hidden rounded-lg">
              <img
                src={ts}
                alt={'Text to Speech '}
                className="w-full h-60 object-cover rounded-xl "
              />
            </div>
            <h2 className="text-2xl font-semibold text-black mt-4">Text to Speech Converter using Matlab</h2>
            <div className="flex justify-between mt-4 space-x-3">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => window.location.href = project.githubLink}
              >
                Github
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                onClick={() => window.location.href = project.liveDemoLink}
              >
                Live Demo
              </button>
            </div>
          </div>
               




          <div className="bg-blue-300 transition-transform duration-300 hover:scale-105 border border-gray-300 p-5 rounded-xl shadow-lg" >
            <div className="overflow-hidden rounded-lg">
              <img
                src={campusRide}
                alt={'Text to Speech '}
                className="w-full h-60 object-cover rounded-xl "
              />
            </div>
            <h2 className="text-2xl font-semibold text-black mt-4">Campus Ride</h2>
            <div className="flex justify-between mt-4 space-x-3">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => window.location.href = project.githubLink}
              >
                Github
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                onClick={() => window.location.href = project.liveDemoLink}
              >
                Live Demo
              </button>
            </div>
          </div>
               

          <div className="bg-blue-300 transition-transform duration-300 hover:scale-105 border border-gray-300 p-5 rounded-xl shadow-lg" >
            <div className="overflow-hidden rounded-lg">
              <img
                src={pms}
                alt={'Text to Speech '}
                className="w-full h-60 object-cover rounded-xl "
              />
            </div>
            <h2 className="text-2xl font-semibold text-black mt-4">Pharmacy Management System</h2>
            <div className="flex justify-between mt-4 space-x-3">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => window.location.href = project.githubLink}
              >
                Github
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                onClick={() => window.location.href = project.liveDemoLink}
              >
                Live Demo
              </button>
            </div>
          </div>

      </div>
     
    </section>
  );
};

export default Project;
