import React from 'react';
import Twitter from '../assets/Frametwitter.svg'
import Facebook from "../assets/Framefacebook.svg"
import LinkedIn from "../assets/FrameLinkedIn.svg"
import Instagram from "../assets/Frame.svg"
import { Link } from 'react-router-dom';
import PlayStore from "../assets/PlayStore.svg"
import AppStore from "../assets/AppStore.svg"
import App from '../App';

const HamBurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`flex items-center justify-center fixed top-0 right-0 w-full md:w-[551px] h-full bg-black text-white transition-transform transform ${isOpen ? 'translate-x-0 z-50' : 'translate-x-full z-30'}`}>
      <button className="absolute top-5 right-5 z-50" onClick={toggleMenu}>
        <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="flex flex-col items-start p-10 gap-5 w-[351px] h-[252px]">
        <a href="#team" className="text-xl text-[30px] text-yellow-69 font-bold leading-10 ">OUR TEAM</a>
        <a href="#juices" className="text-xl text-[30px]  text-yellow-69 font-bold leading-10">DAILY JUICES</a>
        <a href="#corporates" className="text-xl text-[30px] text-yellow-69 font-bold leading-10">FOR CORPORATES</a>
        <div className="flex space-x-4 mt-10">
          
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