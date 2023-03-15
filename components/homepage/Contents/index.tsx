import Divider from '@/components/shared/divider'
import Traction from './Traction'
import Savings from './Savings'
import Strategy from './Strategy'

const Contents = () => {
  return (
    <div className='bg-[#020922] container'>
      <Traction />
      <Divider className='my-[175px]' />
      <Savings />
      <Strategy />
    </div>
  )
}

export default Contents
