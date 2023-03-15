import { HeadSubText } from '@/config/constants'
import Image from 'next/image'
import { ReactNode } from 'react'
import CustomButton from '../CustomButton'

interface HomepageWrapperProps {
  children?: ReactNode
}

const HomepageWrapper = ({ children }: HomepageWrapperProps) => (
  <div className='relative w-full'>
    <div className='-z-1 absolute h-full w-full animate-pulse'>
      <Image loading='eager' src='/assets/background.png' alt='bg' fill />
    </div>
    <div className='z-2 relative flex flex-row justify-between container sm:flex-col'>
      <div className='flex flex-col pt-40'>
        <h1 className='flex font-pixel text-[4rem] font-extrabold leading-[120%] text-primary drop-shadow-md sm:text-[2rem]'>
          SECURE&nbsp;<p className='text-gold'>FUND</p>
        </h1>
        <h1 className='flex pb-5 font-pixel text-[4rem] font-extrabold leading-[120%] text-primary drop-shadow-md sm:text-[2rem]'>
          SECURE&nbsp;<p className='text-gold'>RETURN</p>
        </h1>
        <p className='pb-16 text-[27px] sm:text-[16px]'>{HeadSubText}</p>
        <CustomButton
          title='Launch App'
          onClick={''}
          className='mb-16 sm:m-auto'
        />
      </div>
      <div className='flex flex-col justify-center'>
        <Image
          alt='mark-log'
          src='/assets/images/mask-logo.png'
          width={482.5}
          height={466}
          className='mt-[83px]'
        />
        <Image
          alt='mark-bottom'
          src='/assets/images/mask-bottom.png'
          width={500}
          height={85.75}
          className='mt-[-18px] mb-[79px]'
        />
        <div className='z-3 relative flex items-center justify-center md:flex md:justify-end'>
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default HomepageWrapper
