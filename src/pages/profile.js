import * as React from 'react';
import Navbar from '../componets/Navbar';

const ProfilePage = () => {

  return (
<div className='bg-customColor text-white'>
<Navbar/>
<span className=' font-bold text-lg flex justify-center pt-5 '>Profile Page</span>  
<div className='grid grid-row-2 gap-y-28'>
    <div className='flex flex-row'>
    <div>
      <div className=' bg-red-400 h-32 w-32 rounded-full l ml-20 mt-16 '></div>
      </div>
      <div>
        <div className='grid grid-cols-4  gap-x-2  ml-11 mt-16'>
        <span className='font-semibold'>Mirage Thakore</span>
        <span>6.11</span>
        <span>82kgs</span>
        </div>
        <p className=' mt-5 ml-11 '>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
    </div>
</div>

{/* <!--
  user list code 
--> */}

<div className='bg-customColor  h-screen w-auto flex pb-3'>
<div className=' w-[35%] bg-card  mt-10 ml-7 rounded-2xl'>
  <span className=' flex justify-center mt-4 font-semibold'> User Lists</span>

 <div className=' p-3'>
 <div className='bg-innerCard rounded-lg p-4 mt-4 flex justify-between' >
  <div className='mb-1'>John Doe</div>
  <div className='text-white'>Fat percentage: 25%</div>
</div>
</div>
</div>


{/* 
<!--
  package list code 
--> */}

<div className=' mt-10 ml-7  bg-card w-7/12 rounded-lg'>
<div>
 <span className='flex justify-center mt-4 font-semibold'>Package List  </span>
 <div>
   <div className=' p-3'>
 <div className='bg-innerCard rounded-lg p-4 mt-4 flex justify-between' >
  <div className='mb-1'>Package Name</div>
  <div className='text-white ml-40'>Package progress : 25%</div>
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' fill='white'/></svg>
 </div>  
</div>
</div>

</div>



</div>
</div>
</div>
  );
};

export default ProfilePage;

