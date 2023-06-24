import * as React from 'react';

import PackageCard from '../componets/packageCard';
import Abstract from '../images/abstract.png';
import InfoCard  from '../componets/infoCard';
import Navbar from '../componets/Navbar';




const IndexPage = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-20 mb-5  text-white '>
        
         <InfoCard/>
         <InfoCard/>
         <InfoCard/>
            
      </section>
      <div className=' p-4'>
      <>
        <PackageCard />
      </>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
