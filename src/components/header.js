import { Link } from "gatsby"
import React from "react"
import logo from "../../static/images/polyphene_logo_black.svg"

const Header = () => (
  <header>
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"Polyphene"}>
            <img alt={"Logo"} src={logo} />
          </Link>
        </div>

        <div className={"get-started"}>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
