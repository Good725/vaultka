import BelowLoadingIcon from '../shared/BelowLoadingIcon'
import Divider from '../shared/divider'
import Contents from './Contents'
import HomepageJumbotron from './Jumbotron'
import Questions from './Questions'
import Supports from './Supports'

const HomepageContainer = () => {
  return (
    <div>
      <HomepageJumbotron />
      <BelowLoadingIcon />
      <Contents />
      <Supports />
      <Divider className='!h-[19px]' />
      <Questions />
    </div>
  )
}

export default HomepageContainer
