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
import ball from "../assets/Ball.svg"
import India from "../assets/India.png"
import arrow from "../assets/arrow.svg"
import downarrow from "../assets/DownArrow.png"
import Arrow from "../assets/Arrow.png"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=' relative flex overflow-y-hidden overflow-x-hidden  w-screen h-[740px] sm:h-screen flex-col bg-custom-yellow'>
    
    <NavBar />
      
      {/* <button 
      onClick={toggleMenu}
      className="relative w-[72px] h-[50px] bg-black rounded-[60px] flex items-center justify-center"
    >
      <div className="absolute w-[26px] h-[2px] bg-white top-[18px]"></div>
      <div className="absolute w-[26px] h-[2px] bg-white top-[30px]"></div>
    </button> */}
   

<button className={`absolute top-5 right-10 sm:right-0 z-40 mr-10 bg-black rounded-full p-2 ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
  <svg width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="3" y1="8" x2="21" y2="8" />
  <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
</button>



    
     
      
      
      <HamBurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className='container w-full h-[499px] flex flex-col items-center justify-center '>
        <div className='text-center'>
          {/* <p className='text-[28px] font-normal font-jakarta sm:text-[20px]'>India's</p> */}
          <img src={India} alt='India'/>
        </div>
        <div className='flex flex-col items-center justify-center w-full '>
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
      <div className='flex justify-start  '>
        <img src={Scanner} alt='' className='ml-5 mb-10 sm:hidden '/>

        <div className='relative z-10 flex items-center justify-center mt-[20px] mr-10 sm:-mr-[10rem] sm:mt-[100px]  '>
  <img src={semicircle} alt='Semicircle'  className='mr-[12rem] z-10 sm:w-[400px] sm:h-[200] sm:hidden ' /> 

  <div className="hidden sm:block sm:w-[600px] sm-h-[600px]">
   <img src={ball} alt='' className=''/>
      </div>
  <div className="absolute w-[50%] h-[50%] right-10 left-1/2 transform -translate-x-[23%] -translate-y-[70%] z-20 sm:w-[82px] sm:h-[82px] sm:-translate-x-[170%] sm:-translate-y-[100%]">
    <img src={shoe} alt='Shoe' />
  </div>
  <div className="absolute w-[50%] h-[50%] right-10 left-1/2 transform -translate-x-[70%] translate-y-[4%] z-30 sm:w-[48px] sm:h-[48px] sm:-translate-x-[600%] sm:-translate-y-[90%]">
    <img src={run} alt='Run' />
  </div>
  <div className="absolute w-[50%] h-[50%] right-10 left-1/2 transform -translate-x-[48%] -translate-y-[40%] z-30 sm:w-[48px] sm:h-[48px] sm:-translate-x-[450%] sm:-translate-y-[146%]">
    <img src={racket} alt='Racket' />
  </div>

  <div className='absolute w-[50%] h-[50%] right-5 left-1/2 transform translate-x-[6%] -translate-y-[40%] z-40 sm:w-[48px] sm:h-[48px] sm:-translate-x-[60%] sm:-translate-y-[146%]'>
  <img src={football} alt=''/>

  </div>

  <div className=' absolute w-[50%] h-[50%] right-5 left-1/2 transform translate-x-[30%] translate-y-[8%] z-40 sm:w-[48px] sm:h-[48px] sm:translate-x-[78%] sm:-translate-y-[90%]'>
  <img src={swim} alt=''/>

  </div>
  <div className='flex flex-col absolute w-[50%] h-[50%] right-5 left-1/2 transform -translate-x-[27%] translate-y-[26%] z-50 sm:-translate-x-[60%] '>
    <p className='font-jakarta font-medium text-[22px]'> Scroll to explore</p>
    <div className='absolute z-40 translate-x-[210%] translate-y-[180%] sm:translate-y-[150%]'>
    <button>
    <img src={arrow} alt=''/>
    </button>
    
    </div>
    
  </div>
</div>


      </div>
      
    </div>
  );
};

export default Home;
