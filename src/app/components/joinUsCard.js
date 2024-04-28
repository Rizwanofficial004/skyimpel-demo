import Link from 'next/link';

// ******* Local Imports *******
import { ArrowRight } from '@/utils/imagesUrl';

const JoinUsCard = ({ cardInfo: { polygon, polygonChild, title, text, active } }) => {

  return (
    <div className={`flex pl-2 md:pl-4 lg:pl-8 items-center shadow-custom-lg rounded-md mt-[2px] mb-7 w-[300px] md:w-[376px] lg:w-[426px] h-[108px] text-lg ${active ? 'border border-[#1565D8] bg-[#F5F9FF]': 'bg-white'}`}>
      <div className={`flex justify-start md:justify-between items-center w-[300px] lg:w-[330px]`}>
        <div className='relative mr-4 md:mr-0'>
          <div>
            <img src={polygon} alt="Polygon" />
          </div>
          <div className='absolute z-10 top-4 left-[15px]'>
            <img src={polygonChild} alt="User" />
          </div>
        </div>

        <div className='w-[180px] md:w-[224px] lg:w-[254px]'>
          <div className='text-[16px] font-medium text-[#000000]'>
            {title}
          </div>
          <div className='text-[14px] font-light leading-4 text-[#8692A6]'>
            {text}
          </div>
        </div>
      </div>

      {
        active && (
          <Link href="/auth/signup">
            <div className='p-2 cursor-pointer'>
              <img src={ArrowRight} alt="ArrowRight" />
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default JoinUsCard
