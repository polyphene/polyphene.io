import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import visionImage from "../../static/images/about-vision.svg"
import missionImage from "../../static/images/about-mission.svg"

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"page-header"}>
            <h2>What is Evidence?</h2>
            <p>Evidence is building an open network and set of tools<br/>to democratize the decentralization and certification of data.</p>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Our Statements</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Vision"} src={visionImage}/>
                            <h3>Vision</h3>
                            <p>At Evidence, we envision a world where data of individuals and entities are not trapped in closed ecosystems but managed by their rightful owners in open networks. Rethinking how data is certified and disclosed enables new forms of collaboration in a world of widespread trust. From this paradigm shift will emerge diverse, prosperous and independent services and applications.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Mission"} src={missionImage}/>
                            <h3>Mission</h3>
                            <p>Evidence is an infrastructure and service provider building a global network to securely own and exchange data at scale between individuals and entities. Evidence’s work relies on cutting-edge technologies to unleash the power of data with minimal disclosure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
