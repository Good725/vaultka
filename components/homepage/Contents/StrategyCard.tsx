import Image from 'next/image'
import { ReactNode } from 'react'
import styles from '../Homepage.module.css'

interface StrategyCardProps {
  image: string
  imageCss?: string
  title: string
  children?: ReactNode
  isShowMarkImage?: boolean
}

const StrategyCard = ({
  image,
  imageCss,
  title,
  children,
  isShowMarkImage = false
}: StrategyCardProps) => (
  <div className='flex flex-col'>
    <div className={styles.strategyCard}>
      <div className={`${styles.strategyCardBox} h-[497px] w-[448px]`}>
        <Image
          className={`mb-[22px] max-w-max ${imageCss}`}
          alt={title}
          src={image}
          width={245}
          height={208.6}
        />
        <p className={`${styles.normalHeadText} !text-[23px] !font-extrabold`}>
          {title}
        </p>
        {children}
      </div>
    </div>
    {isShowMarkImage && (
      <Image
        alt='mark-bottom'
        src='/assets/images/mask-bottom.png'
        width={419}
        height={42}
        className='m-auto mt-[8px] !h-[42px]'
      />
    )}
  </div>
)

export default StrategyCard
