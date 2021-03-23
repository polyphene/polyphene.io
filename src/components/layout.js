/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer>
      <div className={"container"}>
        <div className={"copyright"}>
          <p>
            Copyright {new Date().getFullYear()}, {` `}{" "}
            <Link to="/" title={"Holium"}>
              Holium
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
