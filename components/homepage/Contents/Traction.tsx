import Card from '@/components/shared/Card'
import { tractionText } from '@/config/constants'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from '../Homepage.module.css'

interface HomepageWrapperProps {
  children?: ReactNode
}

const Traction = ({ children }: HomepageWrapperProps) => (
  <div className='relative flex w-full flex-col items-center'>
    <h2 className={`${styles.contentTitleText} mt-[176px] mb-[98px]`}>
      {tractionText}
    </h2>
    <Card className='py-[30px] px-[100px] sm:py-[12px] sm:px-[24px]'>
      <div className='flex flex-row justify-between gap-[123px] sm:gap-[32px]'>
        <div className='flex flex-col items-center'>
          <h1
            className={`${styles.heavyText} absolute mt-[-83px] sm:mt-[-50px]`}
          >
            70k
          </h1>
          <Image
            alt='mark-bottom'
            src='/assets/images/mask-bottom.png'
            width={202}
            height={18}
            className='mt-[33px] h-[18px] sm:mt-[24px] sm:mb-[12px] sm:w-[150px]'
          />
          <p className={styles.normalText}>Total Users</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='mb-[20px] text-[40px] font-bold leading-[30px] text-gold sm:mt-[12px] sm:mb-[12px] sm:text-[24px]'>
            100K
          </h2>
          <p className={styles.normalText}>Total Value Lock</p>
        </div>
      </div>
    </Card>
    {children}
  </div>
)

export default Traction
