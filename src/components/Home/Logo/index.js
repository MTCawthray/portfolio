import './index.scss'
import MarkLogo from '../../../assets/images/MarkLogoYellowBlackNoBackground.png'

const Logo = () => {

  return (
    <div className='logo-container'>
      <img className='solid-logo' src={MarkLogo} alt='Mark Logo'/>
    </div>
  )
}

export default Logo