import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import visionImage from "../../static/images/about-vision.svg"
import missionImage from "../../static/images/about-mission.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>

    <div className={"page-header"}>
      <h2>What is Polyphene?</h2>
      <p>
        Polyphene is the largest directory of extensible data schemas
        <br/>
        powered by a collaborative platform to unlock meaningful data.
      </p>
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
              <p>
                At Polyphene, we envision a world where data sharing reaches new potential and takes on a new meaning.
                Rethinking how data is designed enables new forms of collaboration in a world of widespread trust. From
                this light conceptual shift will emerge diverse, prosperous and independent services and applications.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Mission"} src={missionImage}/>
              <h3>Mission</h3>
              <p>
                Polyphene provides a collaborative platform generating a rich and extensible registry of data schemas to
                unify models and semantics at all stages of the data life cycle. Polyphene's work relies on open
                standards to serve as a pillar of a universal data language.
              </p>
            </div>
          </div>
          {/*TODO add team*/}
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
