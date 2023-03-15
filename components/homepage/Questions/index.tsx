import Image from 'next/image'
import styles from '../Homepage.module.css'
import { questionsText } from '@/config/constants'
import { questionsList } from '@/config/Questions'
import QuestionItem from './QuestionItem'
import CustomButton from '@/components/CustomButton'

const Questions = () => {
  return (
    <div className='bg-[rgba(2, 9, 34, 1)] py-[175px] container'>
      <Image
        className='absolute left-0 mt-[-120px] !h-[771px] !w-screen'
        alt='background_ellipse'
        src='/assets/background_ellipse.png'
        width={100}
        height={771}
      />
      <h2 className={`${styles.contentTitleText} mb-[50px]`}>
        {questionsText}
      </h2>
      {questionsList.map((item, idx) => (
        <QuestionItem key={idx} data={item} />
      ))}
      <div className='mt-[175px] flex justify-center'>
        <CustomButton
          className='relative'
          title='Explore Vaultka strategies'
          onClick={''}
        />
      </div>
    </div>
  )
}

export default Questions
