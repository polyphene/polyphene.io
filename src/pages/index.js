import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/undraw_through_the_park_lxnl.svg"
import thumbnailSelfSovereignIdentity from "../../static/images/undraw_analyze_17kw.svg"
import thumbnailSurveillance from "../../static/images/undraw_surveillance_re_8tkl.svg"
import thumbnailGlobalCommunity from "../../static/images/undraw_the_world_is_mine_nb0e.svg"
import { graphql, Link } from "gatsby"
import BlogCards from "../components/blogCards"

const IndexPage = ({data}) => (
    <Layout>
        <SEO title="Restoring faith in the post-trust era."/>

        <div className={"page-header home"}>
            <h1>Restoring Faith in the Post-Trust Era</h1>
            <p>Evidence is building an open network and set of tools<br/>to democratize the decentralization and certification of data.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Self-Sovereign Identity"} src={thumbnailSelfSovereignIdentity}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>One of the Most Advanced Network of Self-Sovereign Identities</h2>
                                <p>Drawing on years of experience in the field of distributed and decentralized architectures, Evidence is building one of the most advanced network of Self-Sovereign Identities : simple to integrate, interoperable and high-performance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>An Unrivalled Level of Security</h2>
                                <p>Our network enables not to share any personal data.<br/>It uses cutting-edge cryptography (Zero-Knowledge Proofs) to prove characteristics on it without even disclosing it.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Surveillance"} src={thumbnailSurveillance}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Global Community"} src={thumbnailGlobalCommunity}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>An Open Community</h2>
                                <p>Evidence coordinates the efforts of an open, global community to produce the most comprehensive specifications and useful tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <div className={"blog-section"}>
                <div className={"title"}>
                    <h2>Latest News</h2>
                </div>
                <BlogCards posts={data.allGhostPost.edges}/>
                <div className={"title"}>
                    <h5><a href={"https://blog.evidence.fyi"}>Read more news on Evidence blog.</a></h5>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Get started</h2>
                    <p>Contact us to access early releases and engage in the community.</p>
                </div>

                <div className={"button"}>
                    <Link to="/contact" title={"Contact Us"}>Contact Us</Link>
                </div>
            </div>
        </div>
    </Layout>
)

export const query = graphql`
  query {
    allGhostPost(limit: 3, sort: {fields: published_at, order: DESC}) {
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
