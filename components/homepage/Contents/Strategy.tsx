import Card from '@/components/shared/Card'
import {
  glpSubText,
  glpText,
  gmxText,
  mlpSubText,
  mlpText,
  myceliumText,
  strategySubText,
  strategyText
} from '@/config/constants'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from '../Homepage.module.css'
import StrategySection from './StrategySection'
import StrategyCard from './StrategyCard'

interface StrategyProps {
  children?: ReactNode
}

const Strategy = ({ children }: StrategyProps) => (
  <div
    id='strategy'
    className='relative mt-[175px] flex w-full flex-col items-center sm:block'
  >
    <h2 className={`${styles.contentTitleText} mb-[30px]`}>{strategyText}</h2>
    <span className={`${styles.contentTitleSubText} mb-[75px] max-w-[792px]`}>
      {strategySubText}
    </span>
    <Image
      className='absolute right-[-24px] mt-[44px] md:right-[-80px] xl:right-[-120px]'
      alt='backgrd_circle_right'
      src='/assets/images/backgrd_circle_right.png'
      width={227}
      height={684}
    />
    <Image
      className='absolute right-0 sm:hidden'
      alt='glow_behind_card'
      src='/assets/images/glow_behind_card.png'
      width={403}
      height={366}
    />
    <div className='flex flex-col sm:mt-[32px]'>
      <Image
        className='absolute left-[-24px] md:left-[-80px] xl:left-[-120px]'
        alt='backgrd_circle_left'
        src='/assets/images/backgrd_circle_left.png'
        width={559}
        height={990}
      />
      <div className='flex flex-row justify-between sm:flex-col sm:items-center sm:justify-center md:gap-[157px]'>
        <StrategySection
          title={gmxText}
          subTitle={glpText}
          body={glpSubText}
          isAvailableInvest
          onClick={''}
        />
        <StrategyCard
          image='/assets/images/vodka_strategy.png'
          title='Vodka Strategy'
          isShowMarkImage
        >
          <Card className='mt-6 py-[9px] px-14'>
            <div className='flex flex-row justify-between gap-[55px]'>
              <div className='flex flex-col items-center'>
                <h2 className={`${styles.normalText} mb-[6px] !leading-[27px]`}>
                  APY
                </h2>
                <p
                  className={`${styles.normalText} !font-bold !leading-[27px] !text-primary`}
                >
                  15.21%
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <h2 className={`${styles.normalText} mb-[6px] !leading-[27px]`}>
                  TVL
                </h2>
                <p
                  className={`${styles.normalText} !font-bold !leading-[27px] !text-primary`}
                >
                  ${(273414.3).toLocaleString()}
                </p>
              </div>
            </div>
          </Card>
        </StrategyCard>
      </div>
      <div className='mt-[131px] mb-[169px] flex flex-row justify-between sm:my-[32px] sm:flex-col sm:items-center sm:justify-center md:gap-[157px]'>
        <StrategySection
          title={myceliumText}
          subTitle={mlpText}
          body={mlpSubText}
          isAvailableInvest={false}
        />
        <StrategyCard
          image='/assets/images/whiskey_strategy.png'
          imageCss='!mb-[52px]'
          title='Whiskey Strategy'
        >
          <p
            className={`${styles.defaultText} mt-[45px] !leading-[22px] text-gold`}
          >
            Expected Launch Date: 20 March 2023
          </p>
        </StrategyCard>
      </div>
    </div>
    {children}
  </div>
)

export default Strategy
