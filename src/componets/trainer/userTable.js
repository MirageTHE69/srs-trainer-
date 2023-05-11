import React from 'react';

const  Table = () => {
  return (
    <div className='container  mx-auto px-4 sm:px-8 bg-card '>
      <div className='py-8'>
        <div>
          <h2 className='text-2xl text-center font-semibold leading-tight'>
            Users
          </h2>
        </div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                    Users
                  </th>
                  <th className='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                    progress
                  </th>
                  <th className='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                    package
                  </th>
                  <th className='px-5 py-3 border-b-2 border-borderColor bg-black text-left text-xs font-semibold  uppercase tracking-wider'>
                    Status
                  </th>
                  <th className='px-5 py-3 border-b-2 border-borderColor bg-black'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <div className='flex'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-full h-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className=' mt-2 whitespace-no-wrap'>
                          Aditya mohite
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap'>88/100</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap '>Abs package</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0  border border-green-700  opacity-50 rounded-full'></span>
                      <span className='relative '>active</span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <button
                      type='button'
                      className='inline-block text-gray-500 hover:text-gray-700'>
                      <svg
                        className='inline-block h-6 w-6 fill-current'
                        viewBox='0 0 24 24'>
                        <path d='M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z' />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <div className='flex'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-full h-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className=' mt-2 whitespace-no-wrap'>
                          Aditya mohite
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap'>88/100</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap '>Abs package</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0  border border-green-700  opacity-50 rounded-full'></span>
                      <span className='relative '>active</span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <button
                      type='button'
                      className='inline-block text-gray-500 hover:text-gray-700'>
                      <svg
                        className='inline-block h-6 w-6 fill-current'
                        viewBox='0 0 24 24'>
                        <path d='M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z' />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <div className='flex'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-full h-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className=' mt-2 whitespace-no-wrap'>
                          Aditya mohite
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap'>88/100</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap '>Abs package</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0  border border-green-700  opacity-50 rounded-full'></span>
                      <span className='relative '>active</span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <button
                      type='button'
                      className='inline-block text-gray-500 hover:text-gray-700'>
                      <svg
                        className='inline-block h-6 w-6 fill-current'
                        viewBox='0 0 24 24'>
                        <path d='M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z' />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <div className='flex'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-full h-full rounded-full'
                          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className=' mt-2 whitespace-no-wrap'>
                          Aditya mohite
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap'>88/100</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <p className=' whitespace-no-wrap '>Abs package</p>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight'>
                      <span
                        aria-hidden
                        className='absolute inset-0  border border-green-700  opacity-50 rounded-full'></span>
                      <span className='relative '>active</span>
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b border-borderColor bg-black text-sm'>
                    <button
                      type='button'
                      className='inline-block text-gray-500 hover:text-gray-700'>
                      <svg
                        className='inline-block h-6 w-6 fill-current'
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
  );
}

export default Table;
