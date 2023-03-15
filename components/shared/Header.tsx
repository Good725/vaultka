import BorderBtn from '../CustomButton/BorderBtn'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='flex items-center justify-between py-6 container'>
      <Logo />
      <BorderBtn title='Launch App' onClick={''} />
    </header>
  )
}

export default Header
