import React from 'react'
import dynamic from 'next/dynamic';

// ******* Local Imports *******
const DynamicOnBoardingSideSection = dynamic(() => import('../components/onBoardingSideSection'));

const AuthLayout = ({children}) => {
  return (
    <div className='grid grid-cols-11 min-h-screen lg:min-h-full'>
      <div className='col-span-12 md:col-span-5'>
        <DynamicOnBoardingSideSection frame={1}/>
      </div>
      <div className='col-span-12 md:col-span-6'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout