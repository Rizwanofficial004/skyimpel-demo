'use client'
import React, { useState } from 'react';
import Link from 'next/link'

// ******* Local Imports *******
import JoinUsCard from '../components/joinUsCard';
import { joinUsCardsData } from '@/utils/constants';


const Auth = () => {
  const [joinUsInfo, setJoinUsInfo] = useState(joinUsCardsData);

  const selectCard = (id) => {
    const updatedInfo = joinUsInfo.map(obj => ({
      ...obj,
      active: obj.id === id,
    }));
    setJoinUsInfo(updatedInfo);
  };

  return (
    <div className=''>
      <div className='text-center md:text-right md:mr-6 lg:mr-20 mt-[70px] text-[#8692A6]'>
        Already have an account? &nbsp;
        <Link href="/auth/signin">
          <span className='font-medium text-[#1565D8] cursor-pointer'>Sign In</span>
        </Link>
      </div>

      <div className='flex flex-col items-center md:items-start md:ml-[20px] lg:ml-[65px] xl:ml-[127px] mt-[70px] lg:mt-[137px]'>
        <div className='font-bold text-3xl leading-9 text-center md:text-right'>
          Join Us!
        </div>
        <div className='mt-3 text-center md:text-left mb-8 w-[300px] md:w-[411px] font-light leading-7 text-[18px] text-[#8692A6]'>
          To begin this journey, tell us what type of account you’d be opening.
        </div>

        {joinUsInfo.map(cardInfo => (
          <div onClick={() => selectCard(cardInfo.id)} key={cardInfo.id}>
            <JoinUsCard cardInfo={cardInfo} selectCard={selectCard}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auth;
