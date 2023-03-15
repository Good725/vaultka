import Card from '@/components/shared/Card'
import { savingInnerText, savingSubText, savingText } from '@/config/constants'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from '../Homepage.module.css'

interface HomepageWrapperProps {
  children?: ReactNode
}

const Savings = ({ children }: HomepageWrapperProps) => (
  <div className='relative m-auto flex w-full max-w-[792px] flex-col'>
    <h2 className={`${styles.contentTitleText} mb-[30px]`}>{savingText}</h2>
    <span className={`${styles.contentTitleSubText} mb-[55px]`}>
      {savingSubText}
    </span>
    <Card className={styles.savingCard}>
      <div className='flex flex-row justify-between gap-[38px]'>
        <div className='mt-[45px] ml-[50px] flex flex-col items-start'>
          <h1 className={`mb-[45px] ${styles.normalHeadText}`}>Savings</h1>
          <p className={styles.defaultText}>{savingInnerText}</p>
          <Image
            className='absolute bottom-0 ml-[-85px]'
            alt='glow_inside_card'
            src='/assets/images/glow_inside_card.png'
            width={494}
            height={366}
          />
        </div>
        <Image
          className='mt-[31px] mb-[7px] mr-[39.36px]'
          alt='gold'
          src='/assets/images/gold.png'
          width={293}
          height={280}
        />
      </div>
    </Card>
    {children}
  </div>
)

export default Savings
