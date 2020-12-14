import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import polypheneLogoBlack from "../../static/images/polyphene_logo_black.svg"
import polyphenePurple from "../../static/images/polyphene_purple.svg"
import { Link } from "gatsby"

const PressKitPage = () => (
  <Layout>
    <SEO title="Press Kit" />

    <div className={"page-header"}>
      <h2>Press Kit</h2>
      <p>
        Thanks for your interest in Polyphene.
        <br />
        Here are a few guidelines for using the brand resources.
      </p>
    </div>

    <div className={"container"}>
      <div className={"content"}>
        <h3>Name</h3>
        <p>"Polyphene" is one word spelled with a capital P.</p>

        <h3>Logos</h3>
        <img alt="Polyphene logo" src={polypheneLogoBlack} width="256" />
        <p>
          You may download logos{" "}
          <a href={"https://cloud.polyphene.io/s/s4M9cA7ZfgPT2p5/download"}>
            here
          </a>{" "}
          (2MB). They are available in multiple sizes, formats and colors. You
          will even find black and white assets.
        </p>

        <h3>Colors</h3>
        <p>Polyphene Purple is our hero color.</p>
        <img alt="Polyphene Purple color" src={polyphenePurple} width="128" />

        <h3>Friendly Legal Reminder</h3>
        <p>
          These graphics are proprietary and protected under intellectual
          property laws.
        </p>

        <h3>Dos and don'ts</h3>
        <p>
          Please do:
          <ul>
            <li>
              Provide sufficient space around the Polyphene logo to keep it
              uncluttered and clear in relation to other objects.
            </li>
          </ul>
        </p>
        <p>
          Please don't:
          <ul>
            <li>
              Use any logos or images to represent Polyphene other than images
              provided on this page.
            </li>
            <li>
              Modify logos in any way (e.g. change colors, apply effects, or
              alter the size and position of the icon in relation to the
              Polyphene name).
            </li>
            <li>
              Use the logo in a manner that would imply a relationship,
              affiliation, or endorsement by Polyphene of your product, service,
              or business.
            </li>
            <li>
              Use these graphics as part of your own product, business, or
              service’s name.
            </li>
          </ul>
        </p>

        <h3>Other Credits</h3>
        <p>
          On our{" "}
          <Link to="/about" title={"About Us"}>
            statement page
          </Link>
          , images created by{" "}
          <a href="https://www.freepik.com/vectors/people">pch.vector</a> (man
          with the spyglass) and{" "}
          <a href="https://www.freepik.com/vectors/business">rawpixel.com</a>{" "}
          (people with puzzle pieces).
          <br />
          The theme of this website is inspired from{" "}
          <a href={"https://github.com/histaff/website-static"}>HiStaff</a>.
        </p>
      </div>
    </div>
  </Layout>
)

export default PressKitPage
