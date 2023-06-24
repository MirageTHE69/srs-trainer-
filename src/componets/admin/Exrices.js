import * as React from 'react';
import Muscle from '../../images/muscle.svg';

const Exrice = () => {
  return (
    <div class='p-4'>
    <div class='flex bg-card'>
      <div class='w-[40%] p-5'>
        <div class='mt-4 h-72 bg-blue-700'>
          <div class='flex justify-center pt-7'>
           <img src={Muscle} alt='muscle' width='170' height='170' />
          </div>

          <div class=' mt-5 flex justify-center'>
            <span class='text-white text-xl font-bold'>Exrices</span>
          </div>
        </div>
      </div>

      <div class='w-full h-full grid grid-cols-4 gap-4 text-white p-7 pl-'>
       <div>
       <div>
          <div class='w-24 h-24 bg-bluecard  flex justify-center text-center'>
          <img src={Muscle} alt='muscle' width='60' height='60' />
          </div>
          <span class='ml-5 text-center'>Push up</span>
        </div>
       </div>

      </div>
    </div>
    </div>

    );
};

export default Exrice;
