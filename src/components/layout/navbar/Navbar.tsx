import { Link } from "react-router-dom"
import LogoSvg from "../../../assets/icons"
import { NavbarDate } from "../../../mock/navbar"
import * as React from "react"

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div>
          <LogoSvg />
        </div>
        <div>
          {
            NavbarDate.map((item, key) => (
                <React.Fragment key={key}>
                  {/* <Link to={item.to}>{item.text}</Link> */}
                </React.Fragment>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar