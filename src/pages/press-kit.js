import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import evidenceLogoBlack from "../../static/images/evidence_logo_black.svg"
import evidencePurple from "../../static/images/evidence_purple.svg"
import { Link } from "gatsby"

const PressKitPage = () => (
    <Layout>
        <SEO title="Press Kit"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Press Kit</h1>
                </div>

                <p>Thanks for your interest in Evidence. Here are a few guidelines for using the brand resources.</p>

                <h3>Name</h3>
                <p>"Evidence" is one word spelled with a capital E.</p>

                <h3>Logos</h3>
                <img alt="Evidence logo" src={evidenceLogoBlack} width="256" />
                <p>You may download logos <a href={"https://cloud.evidence.fyi/s/s4M9cA7ZfgPT2p5/download"}>here</a> (2MB). They are available in multiple sizes, formats and colors. You will even find black and white assets.</p>

                <h3>Colors</h3>
                <p>Evidence Purple is our hero color.</p>
                <img alt="Evidence Purple color" src={evidencePurple} width="128" />

                <h3>Friendly Legal Reminder</h3>
                <p>These graphics are proprietary and protected under intellectual property laws.</p>

                <h3>Dos and don'ts</h3>
                <p>
                    Please do:
                    <ul>
                        <li>Provide sufficient space around the Evidence logo to keep it uncluttered and clear in relation to other objects.</li>
                    </ul>
                </p>
                <p>
                    Please don't:
                    <ul>
                        <li>Use any logos or images to represent Evidence other than images provided on this page.</li>
                        <li>Modify logos in any way (e.g. change colors, apply effects, or alter the size and position of the icon in relation to the Evidence name).</li>
                        <li>Use the logo in a manner that would imply a relationship, affiliation, or endorsement by Evidence of your product, service, or business.</li>
                        <li>Use these graphics as part of your own product, business, or service’s name.</li>
                    </ul>
                </p>

                <h3>Other Credits</h3>
                <p>On our <Link to="/about" title={"About Us"}>statement page</Link>, images created by <a href="https://www.freepik.com/vectors/people">pch.vector</a> (man with the spyglass) and <a href="https://www.freepik.com/vectors/business">rawpixel.com</a> (people with puzzle pieces).</p>
            </div>
        </div>
    </Layout>
)

export default PressKitPage
