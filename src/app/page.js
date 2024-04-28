'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

// ******* Local Imports *******
import { ArrowBack, ProfileAvatar } from '@/utils/imagesUrl';
import OnBoardingSideSection from './components/onBoardingSideSection';
import { dispatch } from '@/redux/store';
import { logout } from '@/redux/slices/auth.slice';

const Home = () => {

  const router = useRouter()

  const logoutUser = () => {
    dispatch(logout())
    router.push('/auth')
  }

  return (
    <div className='grid grid-cols-11 min-h-screen lg:min-h-full'>
      <div className='col-span-12 md:col-span-5'>
        <OnBoardingSideSection frame={2}/>
      </div>
      <div className='col-span-12 md:col-span-6'>
        <div className='flex flex-col justify-between  h-[600px] md:min-h-full'>
          <div className='flex justify-end md:mr-6 lg:mr-16 mt-[60px] text-[#8692A6]'>
            <div className='flex justify-center items-center md:text-right mr-6 md:mr-0'>
              <div>
                <div className='text-[#BDBDBD] font-medium text-sm'>Steve Balbar</div>
                <div className='text-base font-medium '>stevebalbar@example.com</div>
              </div>
              <div className='border rounded-full ml-2'>
                <img src={ProfileAvatar} alt='profile Avatar' />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center mb-0 md:mb-16 mx-4'> 
            <div>
              <div className='font-semibold text-[30px] md:text-[40px] lg:text-[50px] leading-6 md:leading-10  '>
                Congratulations! 🎉
              </div>
              <div className='mt-3 font-light leading-7 lg:leading-10 text-[14px] md:text-[20px] lg:text-[26px] text-[#8692A6]'>
                Thanks for joining the company
              </div>
            </div>
          </div>

          <div onClick={logoutUser} className='flex justify-start ml-6 lg:ml-12 mb-8 items-start cursor-pointer font-medium text-[16px] text-[#8692A6]'>
            <img src={ArrowBack} alt='arrowback' />
              <div className='mt-[-2px] ml-1'>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
