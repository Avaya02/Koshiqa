// SemiCircle.jsx
import React from 'react';

const SemiCircle = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
            <div className="relative bottom-0 left-0 w-full h-16 overflow-hidden">
      <div className=" bottom-0 left-0 w-full h-full">
        <div className="w-full h-full bg-yellow-500 rounded-full transform origin-bottom">
          <div className="w-full h-full bg-white transform rotate-180 origin-bottom"></div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default SemiCircle


