import config from '@/config'
import Image from 'next/image'

const Logo = () => (
  <div className='flex flex-row items-center justify-center space-x-2 leading-none'>
    <Image alt={config.name} src='/assets/logo.svg' width={112} height={35} />
  </div>
)

export default Logo
