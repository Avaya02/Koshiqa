import React from 'react'
import logo from '../assets/koshLogo.svg'


const NavBar  = () => {
  return (
    <div  className='flex h-14 items-center justify-between mt-5 ml-20 sm:ml-4 sm:mt-5' >
     
     <div>
     <img src={logo}  width={225} height={48} alt='' className='sm:w-[108px] sm:h-[24px]'/>
     </div>
     
     <div className='rounded-full bg-black'>
        <button></button>
     </div>
   

      
    </div>
  )
}

export default NavBar
