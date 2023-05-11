import * as React from 'react';

const MsgCard = () => {
  return (
    <div class='container mx-auto bg-card px-4 pt-0 sm:px-8'>
      <div class='py-8'>
        <div>
          <h2 class='text-center text-2xl font-semibold leading-tight'>
            Messages
          </h2>
        </div>
        <div class='-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8'>
          <div class='inline-block min-w-full overflow-hidden rounded-lg shadow-md'>
            <table class='min-w-full leading-normal'>
              <tbody>
                <tr>
                  <td class='border-b border-borderColor bg-black px-5 py-5 text-sm'>
                    <div class='flex'>
                      <div class='h-10 w-10 flex-shrink-0'>
                        <img
                          class='h-full w-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div class='ml-3'>
                        <p class='whitespace-no-wrap mt-2'>Aditya mohite</p>
                      </div>
                    </div>
                  </td>

                  <td class='border-b border-borderColor bg-black px-5 py-5 text-sm'>
                    <span class='relative inline-block px-3 py-1 font-semibold leading-tight text-green-400'>
                      <span class='relative'></span>
                    </span>
                  </td>
                  <td class='border-b border-borderColor bg-black px-5 py-5 text-sm'>
                    <button
                      type='button'
                      class='inline-block text-gray-500 hover:text-gray-700'>
                      <svg
                        fill='#ffffff'
                        height='20px'
                        width='20px'
                        version='1.1'
                        id='Layer_1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlns:xlink='http://www.w3.org/1999/xlink'
                        viewBox='0 0 458 458'
                        xml:space='preserve'
                        stroke='#ffffff'>
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'></g>
                        <g id='SVGRepo_iconCarrier'>
                          <g>
                            <g>
                              <path d='M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243 c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252 C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062 c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15 s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15 s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z'></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgCard;
