import React from 'react'
import { Frame1, Frame2 } from '@/utils/imagesUrl'

const OnBoardingSideSection = ({frame}) => {
  return (
    <div className='h-full'>
      <img src={frame === 1 ? Frame1 : Frame2} className='h-full' alt='side section image' />
    </div>
  )
}

export default OnBoardingSideSection