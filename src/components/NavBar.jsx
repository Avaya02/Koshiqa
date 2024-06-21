import React from 'react'
import logo from '../assets/koshLogo.svg'


const NavBar  = () => {
  return (
    <div  className='flex h-14 items-center justify-between mt-5 ml-20 ' >
     
     <div>
     <img src={logo}  width={225} height={48} alt=''/>
     </div>
     
     <div className='rounded-full bg-black'>
        <button></button>
     </div>
   

      
    </div>
  )
}

export default NavBar
