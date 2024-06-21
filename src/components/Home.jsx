import React, { useState } from 'react';
import NavBar from './NavBar';
import semicircle from '../assets/semicicle.svg';
import ButtonJoinUs from '../assets/Buttonjoinus.svg';
import HamBurgerMenu from './HamBurgerMenu';
import Scanner from "../assets/Scanner.svg"
import shoe from "../assets/shoe.svg"
import football from "../assets/football2.svg"
import swim from "../assets/swim.svg"
import run from "../assets/run.svg"
import racket from "../assets/racket.svg"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex w-screen h-[900px] flex-col bg-custom-yellow'>
    
    <NavBar />
      
      {/* <button 
      onClick={toggleMenu}
      className="relative w-[72px] h-[50px] bg-black rounded-[60px] flex items-center justify-center"
    >
      <div className="absolute w-[26px] h-[2px] bg-white top-[18px]"></div>
      <div className="absolute w-[26px] h-[2px] bg-white top-[30px]"></div>
    </button> */}
    <button className={`absolute top-5 right-5 z-40 mr-10 sm:mt-2 sm:mr-1 bg-black rounded-full p-2 ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
  <svg width="40" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
</button>



    
     
      
      
      <HamBurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className='container w-full h-[499px] flex flex-col items-center justify-center'>
        <div className='text-center'>
          <p className='text-[28px] font-normal font-jakarta sm:text-[20px]'>India's</p>
        </div>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='w-full h-[250px] flex flex-col items-center justify-center'>
            <p className='text-[150px] font-extrabold font-anton font-Medium sm:text-[106px]'>10,000</p>
            <p className='text-[40px] font-normal font-anton sm:text-[28px]'>STEP APP</p>
          </div>
          <div className='w-full h-[105px] mt-8 flex justify-center items-center  ml-[10rem] sm:ml-0 sm:flex-col sm:mt-10'>
            <p className='font-medium text-[24px] w-[550px]  text-center text-pure-greys-10 font-jakarta sm:w-[327px]  sm:text-[16px]'>
              We are not step trackers but step enablers. On a mission to build India's most sincere fitness community.
            </p>
            <div className=''>
              <img src={ButtonJoinUs} alt='Join Us' className='w-[168px] h-[168px] ml-10 mt-11 sm:w-[136px] sm:h-[136px] sm:ml-0 sm:mt-6'  />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-start '>
        <img src={Scanner} alt='' className='ml-5 mb-10 sm:hidden '/>

        <div className='relative flex items-center justify-center mt-[20px] mr-10'>
  <img src={semicircle} alt='Semicircle' width={1396} height={1396} className='mr-[12rem] z-10' /> 
  <div className="absolute w-[50%] h-[50%] right-10 left-1/2 transform -translate-x-[25%] -translate-y-[70%] z-20">
    <img src={shoe} alt='Shoe' />
  </div>
  <div className="absolute w-[50%] h-[50%] right-10 left-1/2 transform -translate-x-[65%] -translate-y-[10%] z-30">
    <img src={run} alt='Run' />
  </div>
  <div className="absolute w-[50%] h-[50%] right-10 left-1/2 transform -translate-x-[45%] -translate-y-[40%] z-30">
    <img src={racket} alt='Racket' />
  </div>

  <div className='absolute w-[50%] h-[50%] right-5 left-1/2 transform translate-x-[4%] -translate-y-[45%] z-40'>
  <img src={football} alt=''/>

  </div>

  <div className='absolute w-[50%] h-[50%] right-5 left-1/2 transform translate-x-[25%] -translate-y-[10%] z-40'>
  <img src={swim} alt=''/>

  </div>
</div>


      </div>
      
    </div>
  );
};

export default Home;
