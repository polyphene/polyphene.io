import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/undraw_through_the_park_lxnl.svg"
import thumbnailSelfSovereignIdentity from "../../static/images/undraw_analyze_17kw.svg"
import thumbnailSurveillance from "../../static/images/undraw_surveillance_re_8tkl.svg"
import thumbnailGlobalCommunity from "../../static/images/undraw_the_world_is_mine_nb0e.svg"
import { graphql, Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Restoring faith in the post-trust era."/>

    <div className={"page-header home"}>
      <h1>Build the Universal Data Language</h1>
      <p>
        Polyphene is the largest directory of extensible data schemas
        <br/>
        powered by a collaborative platform to unlock meaningful data.
      </p>
      <img alt={"Dashboard"} src={featureImage}/>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img
                  alt={"Open and Rich Registry"}
                  src={thumbnailSelfSovereignIdentity}
                />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>
                  Explore an Open and Rich Registry
                </h2>
                <p>
                  of schemas used in different sectors and activities to gain efficiency in your projects and push
                  towards standardization.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Collaborate using our Advanced Editor</h2>
                <p>
                  by editing and mapping schemas, accessing their version history, publishing suggestions or comments,
                  and more.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Advanced Editor"} src={thumbnailSurveillance}/>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Interoperate with Others"} src={thumbnailGlobalCommunity}/>
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Interoperate with Others</h2>
                <p>
                  by globally promoting schemas currently implemented in your projects to streamline your integration
                  efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Get started</h2>
          <p>
            Contact us to access early releases and engage in the community.
          </p>
        </div>

        <div className={"button"}>
          <Link to="/contact" title={"Contact Us"}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allGhostPost(limit: 3, sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          title
          feature_image
          url
          excerpt
        }
      }
    }
  }
`

export default IndexPage
