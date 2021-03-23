import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/undraw_through_the_park_lxnl.svg"
import thumbnailSelfSovereignIdentity from "../../static/images/undraw_analyze_17kw.svg"
import thumbnailSurveillance from "../../static/images/undraw_surveillance_re_8tkl.svg"
import thumbnailGlobalCommunity from "../../static/images/undraw_the_world_is_mine_nb0e.svg"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Holistic data."/>

    <div className={"page-header home"}>
      <h1>Holistic Data</h1>
      <p>
        Holium is the digital element that contains both the data
        <br/>
        and its transformation history for unparalleled transparency.
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
                  A new way to Transform Data
                </h2>
                <p>
                  Using a deterministic WebAssembly virtual machine and Holium’s data structure,
                  run atomic and modular <b>transformations</b> (e.g. delete personal information, add context, etc.)
                  on data to change its structure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>
                  Create and Share Transformations
                </h2>
                <p>
                  Develop and run your own transformations
                  as well as run transformations developed by others
                  and stored on a shared registry.
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
                <h2>
                  Replay every Transformations
                </h2>
                <p>
                  Anyone is able to replay transformations ran on data
                  up to the initial data structure thanks to Holium’s characteristics.
                  As a result, the transformation history of any data is no longer a « black box »
                  but a « glass box » in full view of everyone for transparency and accountability.
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

export default IndexPage
