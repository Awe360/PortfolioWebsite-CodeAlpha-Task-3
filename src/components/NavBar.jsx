import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

function NavBar() {
   const [menu, setMenu] = useState(true);
  
   return (
    <div className='bg-gradient-to-r from-green-500 to-yellow-500 flex justify-between relative items-center h-16'>
      <div className="md:flex justify-between w-full">
        <h1 className='ml-7 text-white text-xl'>Awoke Gebrie</h1>
        <ul className='hidden md:flex gap-10 mr-7'>
          <li className='text-white text-xl'>
            <a href="#home">Home</a>
          </li>
          <li className='text-white text-xl'>
            <a href="#about">About</a>
          </li>
          <li className='text-white text-xl'>
            <a href="#projects">Projects</a>
          </li>
          <li className='text-white text-xl'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-end mr-7 md:[display:none]">
        {menu && <MdMenu onClick={() => setMenu(!menu)} size={40} className='cursor-pointer' />} 
        {!menu && (
          <ul className='block p-5 bg-amber-300 duration-200 absolute right-0 top-[-2px] h-screen w-40 pt-2'>
            <MdClose onClick={() => setMenu(!menu)} size={40} className='cursor-pointer' />
            <li className='pb-5'>
              <a className='serif text-xl' href="#home" onClick={() => setMenu(true)}>Home</a>
            </li>
            <li className='pb-5'>
              <a className='serif text-xl' href="#about" onClick={() => setMenu(true)}>About</a>
            </li>
            <li className='pb-5'>
              <a className='serif text-xl' href="#projects" onClick={() => setMenu(true)}>Projects</a>
            </li>
            <li className='pb-5'>
              <a className='serif text-xl' href="#contact" onClick={() => setMenu(true)}>Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
