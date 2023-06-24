import React from 'react'
import Abstract from '../images/abstract.png';

function  InfoCard() {
  return (
   
 
  <div class="w-72 bg-bluecard shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
  
      <div class="px-4 py-3 w-72 pt-5">
        <span class=" mr-3 uppercase text-xs">No of</span>
        <p class="text-lg font-bold  truncate  block uppercase">Packages</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold  cursor-auto my-3">003</p>
          <div class="  w-16 h-14 ml-40 ">
            <div class="ml-auto">
            <img src={Abstract} />
            </div>
            </div>
        </div>
      </div>
    </a>
  </div>
  

  )
}

export default InfoCard