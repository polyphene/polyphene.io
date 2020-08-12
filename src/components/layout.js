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
import logo from "../../static/images/logo.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconDiscord from "../../static/images/icon-discord.svg"

const Layout = ({children}) => (
    <>
        <Header/>
        <main>{children}</main>
        <footer>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-5"}>
                        <div className={"widget__item"}>
                            <div className={"logo"}>
                                <Link to="/" title={"evidence"}>
                                    <img alt={"Logo"} src={logo}/>
                                </Link>
                            </div>

                            <div className={"about"}>
                                <p>Restoring faith in the post-trust era.</p>
                                <p>Evidence is building an open network and set of tools to democratize the decentralization and certification of data.</p>
                            </div>
                        </div>
                    </div>

                    <div className={"col-2"}>
                        <div className={"widget__item"}>
                            <ul className={"links"}>
                                <h4>Evidence</h4>
                                <ul>
                                    <li><Link to="/about" title={"About Us"}>About</Link></li>
                                    <li><a href={"https://blog.evidence.fyi"}>Blog</a></li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <div className={"col-2"}>
                        <div className={"widget__item"}>
                            <div className={"links"}>
                                <h4>Support</h4>
                                <ul>
                                    <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                    <li><Link to="/press-kit" title={"Press Kit"}>Press Kit</Link></li>
                                    <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={"col-3"}>
                        <div className={"widget__item"}>
                            <div className={"social"}>
                                <a href="https://twitter.com/histaffio" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                <a href="https://www.linkedin.com/company/histaff/" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a>
                                <a href="https://github.com/histaff" target={"_blank"} title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                <a href="https://discord.com/histaff" target={"_blank"} title={"Discord"}><img alt={"Discord"} src={iconDiscord}/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"copyright"}>
                    <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://evidence.fyi" title={"Evidence"}>Evidence</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
