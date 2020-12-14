import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Privacy Policy</h1>
        </div>

        <p className={"italic"}>
          For our analytics, we use Matomo which mission is to liberate
          analytics. They believe in openness, privacy and 100% data ownership,
          and so does Polyphene.
        </p>

        <p>
          This Policy describes the information we collect from you, how we use
          that information and our legal basis for doing so. It also covers
          whether and how that information may be shared and your rights and
          choices regarding the information you provide to us. This Privacy
          Policy applies to the information that we obtain through your use of
          Polyphene websites including its subdomain{" "}
          <a href={"https://blog.polyphene.io"}>blog.polyphene.io</a>.
        </p>

        <h3>Who We Are</h3>
        <p>
          Polyphene is a project brought to you by the Polyphene team members as
          well as many other contributors around the globe.
          <br />
          If you have any questions about this privacy policy, please contact
          our team at{" "}
          <a href={"mailto:contact@polyphene.io"}>contact@polyphene.io</a>.
        </p>

        <h3>What We Collect and Receive</h3>
        <p>
          In order for us to provide you the best possible experience on our
          websites, we need to collect and process certain information.
          Depending on your use of the Services, that may include:
          <ul>
            <li>
              Contact us via email — for example, when you send us questions or
              comments, report a problem or subscribe to our newsletter, we may
              collect your name, email address, message, etc. We use this data
              solely in connection with answering the queries we receive.
            </li>
            <li>
              Usage data — when you visit our site, we will store: the website
              from which you visited us from, the parts of our site you visit,
              the date and duration of your visit, your anonymised IP address,
              information from the device (device type, operating system, screen
              resolution, language, country you are located in, and web browser
              type) you used during your visit, and more. We process this usage
              data in Matomo Analytics for statistical purposes, to improve our
              site and to recognize and stop any misuse.
            </li>
          </ul>
        </p>

        <h3>Opt-out of website tracking</h3>
        <iframe
          title={"analytics opt-out module"}
          width={"100%"}
          src="https://analytics.polyphene.io/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=&fontColor=797283&fontSize=16px&fontFamily=Source%20Sans%20Pro"
        />

        <h3>Your Rights</h3>
        <p>
          You have the right to be informed of Personal Data processed by
          Matomo, a right to rectification/correction, erasure and restriction
          of processing. You also have the right to ask from us a structured,
          common and machine-readable format of Personal Data you provided to
          us. We can only identify you via your email address and we can only
          adhere to your request and provide information if we have Personal
          Data about you through you having made contact with us directly and/or
          you using our site and/or service. We cannot provide, rectify or
          delete any data that we store on behalf of our users or customers. To
          exercise any of the rights mentioned in this Privacy Policy and/or in
          the event of questions or comments relating to the use of Personal
          Data you may contact Polyphene's team:{" "}
          <a href={"mailto:contact@polyphene.io"}>contact@polyphene.io</a>. In
          addition, you have the right to lodge a complaint with the data
          protection authority in your jurisdiction.
        </p>

        <h3>Retention of Data</h3>
        <p>
          We will retain your information as long as your account is active, as
          necessary to provide you with the services or as otherwise set forth
          in this Policy. We will also retain and use this information as
          necessary for the purposes set out in this Policy and to the extent
          necessary to comply with our legal obligations, resolve disputes,
          enforce our agreements and protect Matomo’s legal rights. We also
          collect and maintain aggregated, anonymized or pseudonymized
          information which we may retain indefinitely to protect the safety and
          security of our Site, improve our Services or comply with legal
          obligations.
        </p>

        <h3>Privacy Policy Changes</h3>
        <p>
          We may update this Policy from time to time. If we do, we’ll let you
          know about any material changes, either by notifying you on the
          website or by sending you an email.
        </p>

        <h3>Contact Us</h3>
        <p>
          Email:{" "}
          <a href={"mailto:contact@polyphene.io"}>contact@polyphene.io</a>.
          <br />
          Contact form:{" "}
          <a href={"https://polyphene.io/contact"}>
            https://polyphene.io/contact
          </a>
          .
        </p>
      </div>
    </div>
  </Layout>
)

export default PrivacyPage
