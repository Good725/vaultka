import { FooterSubText } from '@/config/constants'
import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'
import { footerContentList, footerList } from '@/config/FooterContent'

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='flex flex-row items-center justify-between bg-[#020922] py-6 container'>
      <div className='w-full pr-[52px]'>
        <div className='mt-[41px] flex w-full flex-row items-start justify-between sm:flex-col'>
          <div className='flex flex-col items-start'>
            <Logo />
            <p className='mt-[10px] text-[16px] leading-[22px] opacity-50 sm:text-[14px]'>
              {FooterSubText}
            </p>
          </div>
          <div className='flex flex-row gap-[35px] sm:mt-[16px] sm:justify-start sm:gap-[16px]'>
            {footerContentList.map((footer, idx) => (
              <Link key={idx} href={footer.link}>
                <button className='sm:text-[14px]'>{footer.title}</button>
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-[30px] flex w-full flex-row justify-between sm:flex-col'>
          <div className='flex flex-row items-center sm:m-auto'>
            {[1, 2, 3, 4].map((i) => (
              <button key={i}>
                <Image
                  src='/assets/socials/twitter.svg'
                  alt='twitter'
                  width={42}
                  height={42}
                />
              </button>
            ))}
          </div>
          <div className='flex flex-col items-start sm:m-auto sm:mt-4'>
            <p className='text-xs opacity-50'>Audited</p>
            <div className='flex flex-row items-start gap-[8px]'>
              <Image
                src='/assets/icons/audit.svg'
                alt='audit'
                width={29.33}
                height={34}
              />
              <p className='text-[18px] font-semibold leading-[25px] opacity-50'>
                Fortitude
              </p>
            </div>
          </div>
        </div>
        <div className='mt-[20px] h-0 w-full goldBorder' />
        <div className='mt-5 flex w-full flex-row items-center justify-between sm:flex-col'>
          <p className='text-xs font-light'>© 2021 All Rights Reserved</p>
          <div className='flex flex-row gap-[40px]'>
            {footerList.map((footer, idx) => (
              <Link key={idx} href={footer.link}>
                <button className='text-[10px] leading-[30px] text-primary-500'>
                  {footer.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={handleScrollToTop}
        className='absolute right-0 mr-[60px] flex h-8 w-8 items-center justify-center rounded-full roundBorder'
      >
        <Image
          src='/assets/icons/arrows_above.svg'
          alt='arrows_above'
          width={15}
          height={6}
        />
      </button>
    </footer>
  )
}

export default Footer
