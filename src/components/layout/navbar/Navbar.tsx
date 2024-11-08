import { Link, useLocation } from "react-router-dom"
import './styles.scss'
import { LogoSvg, LinkArrow } from "../../../assets"
import { NavbarDate } from "../../../mock/navbar"
import Language from "../../language"
import { useState } from "react"

const Navbar = () => {
  const router = useLocation()
  const [tabLinkState, useTabLinkState] = useState(false);
  const TabLink = () => {
    useTabLinkState(!tabLinkState)
  }
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-wrapper">
          <div>
            <Link to={'/'}>
              <LogoSvg />
            </Link>
          </div>
          <div className="nav-links">
            {
              NavbarDate.map((item, key) => (
                <div className="internal-wrap-links" key={key} >
                  <Link onClick={item.subRoutes != null ? TabLink : undefined} className={`links ${router.pathname === item.to ? 'active' : ""}`} to={item.to}>{item.text}</Link>
                  {item.icon === true && <img className={`${tabLinkState && 'rotate'}`} src={LinkArrow} />}
                  <div className={`${tabLinkState&& item.icon ===true && "subLink"}`}>
                    {tabLinkState && <>{item.subRoutes?.map((subRItem) => (
                      <Link className={`${subRItem.order===4 ?  "sub-links last-Link" :"sub-links"}`} to={subRItem.path}>{subRItem.title}</Link>
                    ))}</>}
                  </div>
                </div>
              )
              )
            }
          </div>
          <div className="lang-signInBtn">
            <div className="lang-wrapper">
              <Language />
            </div>
            <button className="nav-btn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar