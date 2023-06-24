import * as React from 'react';
import Abstract from '../images/abstract.png';
import Navbar from '../componets/Navbar';

const form = () => {
  return (
    <div class='flex bg-black'>
      
      <div class=' bg-bluecard  h-screen w-[40%]'>
        <span class='flex justify-center pt-20 text-lg font-bold text-white'>
          {' '}
          Points to add exrices
        </span>
        <div class='ml-7 mt-7 flex flex-col gap-4 p-4 text-base font-medium text-white'>
          <span>
            • We will request copies of all correspondence exchanged in relation
            to your complaint.
          </span>

          <span>
            • We will request copies of all correspondence exchanged in relation
            to your complaint.
          </span>

          <span>
            • We will request copies of all correspondence exchanged in relation
            to your complaint.
          </span>
        </div>
        <div class=' mt-80  ml-80 h-32 w-1/3 rounded-full '>
          <img src={Abstract} />
        </div>
      </div>

      <div class='flex h-screen w-full flex-col'>
        <div class='mt-5 flex h-52 flex-col gap-5 p-10'>
          <span class='text-lg font-semibold text-white'> Add exrice name</span>
          <input
            type='text'
            id='large-input'
            class='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />

          <span class='text-lg font-semibold text-white'>
            {' '}
            Add details name
          </span>
          <input
            type='text'
            id='large-input'
            class='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />

          <span class='text-lg font-semibold text-white'> Add reps</span>
          <input
            type='text'
            id='large-input'
            class='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          />

          <span class='text-lg font-semibold text-white'> Add reps</span>
          <input
            type='text'
            id='large-input'
            class='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          />
        </div>

        <div class=' flex flex-row mt-72 ml-72 gap-8'>
          <button class='bg-bluecard  h-10 w-[25%] rounded-lg font-semibold text-white'>
            + add photo
          </button>

          <button class='bg-bluecard  h-10 w-[25%] rounded-lg font-semibold text-white'>
            + add video
          </button>
        </div>
        <button class='bg-bluecard ml-96 mt-20 h-10 w-[25%] font-semibold text-white'>
          submit
        </button>
      </div>
    </div>
  );
};

export default form;
