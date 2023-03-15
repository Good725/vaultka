import { supportsText } from '@/config/constants'
import Image from 'next/image'
import styles from './Homepage.module.css'
import { supportItem } from '@/config/SupportsItem'

const Supports = () => (
  <div className='backgroundGradient relative w-full py-[175px] container'>
    <h2 className={`${styles.contentTitleText} mb-[50px]`}>{supportsText}</h2>
    <div className='grid grid-cols-3 gap-12'>
      {supportItem.map((item, idx) => (
        <div className='flex flex-row items-center gap-[15px]' key={idx}>
          <Image alt={item.name} src={item.icon} width={65} height={75} />
          <div className='flex flex-col'>
            <h3 className='mb-[5px] text-[20px] font-bold leading-[27px]'>
              {item.name}
            </h3>
            <span
              className={`${styles.defaultText} !text-[14px] !leading-[19px]`}
            >
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Supports
