import styles from '../Homepage.module.css'
import Divider from '@/components/shared/divider'
import CustomButton from '@/components/CustomButton'

interface StrategySectionProps {
  title: string
  subTitle: string
  body: string
  isAvailableInvest: boolean
  onClick?: any
}

const StrategySection = ({
  title,
  subTitle,
  body,
  isAvailableInvest,
  onClick
}: StrategySectionProps) => (
  <div className='relative flex w-full flex-col items-start'>
    <h3 className='mb-[20px] text-[30px] font-extrabold leading-[30px]'>
      {title}
    </h3>
    <Divider />
    <p
      className={`mt-[55px] mb-[45px] !leading-[20px] ${styles.normalHeadText}`}
    >
      {subTitle}
    </p>
    <span className={`${styles.defaultText} mb-[30px]`}>{body}</span>
    {isAvailableInvest ? (
      <CustomButton
        title='Invest Now!'
        onClick={onClick}
        className='!rounded-[20px] !py-[20px] !px-[79.23px] !text-base sm:m-auto'
      />
    ) : (
      <p className='text-[16px] font-bold leading-[22px] text-[#BFA677] sm:m-auto'>
        Coming Soon...
      </p>
    )}
  </div>
)

export default StrategySection
