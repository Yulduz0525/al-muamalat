import { FooterFacebook, FooterInsta, FooterLogo, FooterTwitter, FooterYoutbe } from '../../../assets'
import './styles.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className='container'>
        <div className='footer-content'>
        <FooterLogo />
          <ul className='footer-links'>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Service
            </li>
            <li>
              Contact Us
            </li>
          </ul>
          <div className='footer-icons'>
            <FooterYoutbe/>
            <FooterFacebook/>
            <FooterTwitter/>
            <FooterInsta/>
          </div>
          <p className='footer-end-text'>Copyright Satyam Studio</p>
        </div>
      </div>
    </div>
  )
}

export default Footer