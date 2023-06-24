import React from 'react';
import Exrice from '../../componets/admin/Exrices';
import InfoCard from '../../componets/infoCard';
import Navbar from '../../componets/Navbar';


const ExricePage = () => {
  return (
    <div className=' bg-black w-screen h-screen'>
      <Navbar/>
      <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-20 mb-5  '>
        <InfoCard />
        <InfoCard />
      </section>
      <Exrice />
    </div>
  );
};

export default ExricePage;
