import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/MarkLogoYellowBlackNoBackground.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
      <div className='nav-bar'>
        <Link className='logo' to='/'>
          <img src={Logo} alt='logo'/>
        </Link>
        <nav>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/about"
            data-text="ABOUT"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" className="about-link" />
          </NavLink>
          <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/contact"
            data-text="CONTACT"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className="contact-link" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mark-cawthray-996522212/"
            >
              <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MTCawthray"
            >
              <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    )
}

export default Sidebar