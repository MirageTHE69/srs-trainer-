import * as React from 'react';
import { useLogin } from '../hooks/auth';
import hero from '../images/hero.png';
import Navbar from '../componets/Navbar';

const PackageCard = () => {
  return (
    <div class='  bg-card text-white'>
      <div class=' h-[15%] p-7 flex justify-between'>
        <span class=' font-semibold text-xl ml-5'> Golden Package</span>
        <div>
          <div class=' flex gap-2'>
            <div class=' w-6 h-6 bg-black'></div>
            <span class=' font-medium'>No of exrices</span>
            <span>12</span>
          </div>
          <div class=' flex gap-2 mt-2'>
            <div class=' w-6 h-6 bg-black'></div>
            <span class=' font-medium'>No of exrices</span>
            <span>12</span>
          </div>
        </div>
      </div>

      <div class='h-[15%]  mt-3'>
        <div class=' flex justify-center gap-8 pt-7'>
          <button class=' w-44 h-11  rounded-lg bg-bluebtn text-white font-medium  '>
            Add exrices
          </button>

          <button class=' w-44 h-11  rounded-lg bg-bluebtn text-white font-medium  '>
            Add exrices
          </button>
        </div>
      </div>

      <div class='container  mx-auto px-4 sm:px-8 bg-card text-white'>
        <div class='py-8'>
          <div>
            <h2 class='text-2xl text-center font-semibold leading-tight'>
              Exercises
            </h2>
          </div>
          <div class='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div class='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
              <table class='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      Users
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      Exercise Name
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      weight
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      time
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black'>
                      Reps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <div class='flex'>
                        <div class='flex-shrink-0 w-10 h-10'>
                          <img
                            class='w-full h-full rounded-full'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                            alt=''
                          />
                        </div>
                        <div class='ml-3'>
                          <p class=' mt-2 whitespace-no-wrap'>Aditya mohite</p>
                        </div>
                      </div>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <p class=' whitespace-no-wrap'>Push Up</p>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <p class=' whitespace-no-wrap '>-</p>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <span class='relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight'>
                        <span
                          aria-hidden
                          class='absolute inset-0  border border-green-700  opacity-50 rounded-full'></span>
                        <span class='relative '>2:30</span>
                      </span>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <div type='button' class='inline-block ml-4'>
                        25
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class='container  mx-auto px-4 sm:px-8 bg-card text-white'>
        <div class='py-8'>
          <div>
            <h2 class='text-2xl text-center font-semibold leading-tight'>
              Exercises
            </h2>
          </div>
          <div class='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div class='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
              <table class='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      Users
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      Exercise Name
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      weight
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      time
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black'>
                      Reps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <div class='flex'>
                        <div class='flex-shrink-0 w-10 h-10'>
                          <img
                            class='w-full h-full rounded-full'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                            alt=''
                          />
                        </div>
                        <div class='ml-3'>
                          <p class=' mt-2 whitespace-no-wrap'>Aditya mohite</p>
                        </div>
                      </div>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <p class=' whitespace-no-wrap'>Push Up</p>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <p class=' whitespace-no-wrap '>-</p>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <span class='relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight'>
                        <span
                          aria-hidden
                          class='absolute inset-0  border border-green-700  opacity-50 rounded-full'></span>
                        <span class='relative '>2:30</span>
                      </span>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <div type='button' class='inline-block ml-4'>
                        25
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
