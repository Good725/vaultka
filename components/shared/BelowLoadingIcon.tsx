import Image from 'next/image'

const BelowLoadingIcon = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('strategy')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='flex flex-row items-center justify-center leading-none'>
      <Image
        className='absolute z-20 opacity-60'
        alt={''}
        src='/assets/icons/loading.png'
        width={93}
        height={100}
      />
      <div
        className='absolute z-30 h-10 w-8 cursor-pointer'
        onClick={handleClickScroll}
      />
      <Image
        className='absolute right-0 z-10'
        alt={''}
        src='/assets/background_glow.png'
        width={589}
        height={948}
      />
    </div>
  )
}

export default BelowLoadingIcon
