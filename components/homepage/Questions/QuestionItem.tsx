import { QuestionDataProps } from '@/config/Questions'
import Divider from '@/components/shared/divider'
import { useRef, useState } from 'react'

const QuestionItem = ({ data }: { data: QuestionDataProps }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  const toggleAccordion = () => {
    console.log('aa')
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-90'
    )
  }

  return (
    <div className='relative flex flex-col'>
      <button
        className='box-border flex cursor-pointer appearance-none items-center justify-between py-6 focus:outline-none'
        onClick={() => toggleAccordion()}
      >
        <p className='text-footnote light inline-block'>{data.question}</p>
        <div className='absolute right-0 inline-block h-[2px] w-[13px] bg-[#BFA677]' />
        {active && (
          <div
            className={`${rotate} inline-block h-[2px] w-[13px] bg-[#BFA677]`}
          />
        )}
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className='transition-max-height overflow-hidden duration-700 ease-in-out'
      >
        <div className='pb-10'>{data.answer}</div>
      </div>
      <Divider className='!normalBorder mb-[20px] !h-[1px] !bg-none' />
    </div>
  )
}

export default QuestionItem
