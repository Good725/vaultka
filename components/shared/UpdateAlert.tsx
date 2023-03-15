import { UpdateAlertText } from '@/config/constants'
import Image from 'next/image'
import { useState } from 'react'

const UpdateAlert = () => {
  const [isShowAlert, setShowAlert] = useState<boolean>(true)

  return (
    <>
      {isShowAlert && (
        <div className='absolute z-50 flex items-center justify-center bg-[#BFA677]/[.6] text-center container'>
          <p className='py-3 text-center smallText'>{UpdateAlertText}</p>
          <Image
            className='absolute right-2 cursor-pointer md:right-10 xl:right-20'
            src='/assets/icons/close.svg'
            alt='close'
            width={15}
            height={15}
            onClick={() => setShowAlert(false)}
          />
        </div>
      )}
    </>
  )
}

export default UpdateAlert
