import React from 'react';
import Twitter from '../assets/Frametwitter.svg'
import Facebook from "../assets/Framefacebook.svg"
import LinkedIn from "../assets/FrameLinkedIn.svg"
import Instagram from "../assets/Frame.svg"
import { Link } from 'react-router-dom';
import PlayStore from "../assets/PlayStore.svg"
import AppStore from "../assets/AppStore.svg"
import koshwhite from "../assets/koshwhite.svg"


const HamBurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={ ` flex items-center z-50 justify-center fixed top-0 right-0 w-[551px] h-full  bg-black text-white transition-transform duration-300 ${isOpen ? 'z-60' : 'z-40'} transform ${isOpen ?  'translate-x-0' : 'translate-x-full'}`}>
      
      {/* <img src={koshwhite} alt='' className='hidden sm:block'/> */}
      <button
      className="absolute top-5 right-5 w-12 h-12 bg-black flex items-center justify-center rounded-md "
      onClick={toggleMenu}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <div className="w-1 bg-white rotate-45 absolute" style={{ height: '100%' }}></div>
        <div className="w-1 bg-white -rotate-45 absolute" style={{ height: '100%' }}></div>
      </div>
    </button>
      <div className="flex flex-col items-start ml-[10px] p-10 gap-[30px]  w-[351px] h-[252px] sm:ml-[150px] sm:w-[450px]">
        <a href="#team" className="text-xl text-[30px] text-yellow-69 font-normal leading-10 sm:text-[40px] font-anton ">OUR TEAM</a>
        <a href="#juices" className="text-xl text-[30px]  text-yellow-69 font-normal leading-10 sm:text-[40px] font-anton">DAILY JUICES</a>
        <a href="#corporates" className="text-xl text-[30px] text-yellow-69 font-normal leading-10 sm:text-[40px] font-anton">FOR CORPORATES</a>
        <div className="flex space-x-4 mt-10 sm:ml-[5px] sm:mt-[150px]">
          
          <Link to="https://instagram.com" >
          <img src={Instagram} alt='' className='w-9 h-9'>
          
          </img>

          </Link>
          <Link to="https://twitter.com" >
          <img src={Twitter} alt='' className='w-9 h-9'>
          
          </img>

          </Link>
          <Link to="https://linkedin.com" >
          <img src={LinkedIn} alt='' className='w-9 h-9'>
          
          </img>

          </Link>
          <Link to="https://facebook.com" >
          <img src={Facebook} alt='' className='w-9 h-9'>
          
          </img>

          </Link>
        </div>
        <div className='flex gap-4 mt-4'>
            <Link to="https://playstore.com">
                <img src={PlayStore} alt=''/>
            </Link>

            <Link to="https://appstore.com">
                <img src={AppStore} alt=''/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HamBurgerMenu ;