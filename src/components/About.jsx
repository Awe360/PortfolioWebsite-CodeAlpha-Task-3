import React from "react";
import AboutImage from "../assets/port.jpg";

const About = () => {
  return (
    <div className="bg-amber-200  py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">

Hi, I'm Awoke, an Electrical and Computer Engineering student with a passion for 
innovation and technology. Currently, I am interning at CodeAlpha as a Frontend Developer, 
where I’m enhancing my skills in web development and design. Through this internship, I’ve gained 
hands-on experience in building responsive, user-centered applications.

My background in electrical and computer engineering allows me to approach problems analytically, 
combining both hardware and software knowledge to create efficient and scalable solutions.
            </p>
            <div className="space-y-4">
            <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-green-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-green-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                 MYSQL
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-green-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-green-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;