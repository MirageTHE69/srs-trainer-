import React from 'react';
import Table from '../componets/trainer/userTable';
import Abstract from '../images/abstract.png';
import Msg from '../images/msgIcon.png';

const Dashboard = () => {
  return (
    <div className=' bg-black text-white'>
      <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-20 mb-5  '>
        <div className='w-72 bg-bluecard shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
          <a href='#'>
            <div className='px-4 py-3 w-72 pt-5'>
              <span className=' mr-3 uppercase text-xs'>No of</span>
              <p className='text-lg font-bold  truncate  block uppercase'>
                Packages
              </p>
              <div className='flex items-center'>
                <p className='text-lg font-semibold  cursor-auto my-3'>003</p>
                <div className='  w-16 h-14 ml-40 '>
                  <div className='ml-auto'>
                    <img src={Abstract} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className='w-72 bg-bluecard shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
          <a href='#'>
            <div className='px-4 py-3 w-72 pt-5'>
              <span className=' mr-3 uppercase text-xs'>No of</span>
              <p className='text-lg font-bold  truncate  block uppercase'>
                Packages
              </p>
              <div className='flex items-center'>
                <p className='text-lg font-semibold  cursor-auto my-3'>003</p>
                <div className='  w-16 h-14 ml-40 '>
                  <div className='ml-auto'>
                    <img src={Abstract} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className='w-72 bg-bluecard shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
          <a href='#'>
            <div className='px-4 py-3 w-72 pt-5'>
              <span className=' mr-3 uppercase text-xs'>No of</span>
              <p className='text-lg font-bold  truncate  block uppercase'>
                Packages
              </p>
              <div className='flex items-center'>
                <p className='text-lg font-semibold  cursor-auto my-3'>003</p>
                <div className='  w-16 h-14 ml-40 '>
                  <div className='ml-auto'>
                    <img src={Abstract} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* table */}

      <div class='container  mx-auto px-4 sm:px-8 bg-card  mt-20 '>
        <div class='py-8'>
          <div>
            <h2 class='text-2xl text-center font-semibold leading-tight'>
              Users
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
                      progress
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      package
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                      Status
                    </th>
                    <th class='px-5 py-3 border-b-2 border-borderColor bg-black'></th>
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
                      <p class=' whitespace-no-wrap'>88/100</p>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <p class=' whitespace-no-wrap '>Abs package</p>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <span class='relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight'>
                        <span
                          aria-hidden
                          class='absolute inset-0  border border-green-700  opacity-50 rounded-full'></span>
                        <span class='relative '>active</span>
                      </span>
                    </td>
                    <td class='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                      <button
                        type='button'
                        class='inline-block text-gray-500 hover:text-gray-700'>
                        <svg
                          class='inline-block h-6 w-6 fill-current'
                          viewBox='0 0 24 24'>
                          <path d='M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z' />
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

      {/* MsgCard */}

      <div class='container mx-auto bg-card px-4 pt-0 mt-10 sm:px-8'>
        <div class='py-8'>
          <div>
            <h2 class='text-center text-2xl font-semibold leading-tight'>
              Notification
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
                        <img class='w-5 h-5' src={Msg} />
                      </button>
                    </td>
                  </tr>

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
                        <img class='w-5 h-5' src={Msg} />
                      </button>
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

export default Dashboard;
