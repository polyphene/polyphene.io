import React, { useState } from "react"
import * as EmailValidator from "email-validator"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsletterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [pending, setPending] = useState(false)

  const canSubmit = name !== "" && EmailValidator.validate(email)

  const handleSubmit = async e => {
    e.preventDefault()
    // submit message
    setPending(true)
    try {
      await axios.post("https://contact-form-api.evidence.fyi/submit", {
        name,
        email,
        subscribe: true,
        source: 1,
      })
    } catch (e) {
      setPending(false)
      return
    }
    setShowSuccess(true)
    // reset form
    setName("")
    setEmail("")
    setPending(false)
  }

  return (
    <Layout>
      <SEO title="Newsletter" />

      <div className={"page-header"}>
        <h2>SSI Developer Newsletter</h2>
        <p>
          Self-Sovereign Identity is a rapidly evolving world, especially on the
          technical side.
          <br />
          Our monthly newsletter is here to help you keeping up to date with the
          latest curated news.
        </p>
      </div>

      <div className={"container"}>
        <div className={"content"}>
          <div className={"row"}>
            <div className={"col-7"}>
              <div className="form-style-8">
                {showSuccess ? (
                  <div>
                    <p>Your subscription has been saved!</p>
                    <input
                      type="submit"
                      value="Subscribe with another address"
                      onClick={() => {
                        setShowSuccess(false)
                      }}
                    />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      disabled={!canSubmit || pending}
                    />
                  </form>
                )}
              </div>
            </div>

            <div className={"col-5"}>
              <p>Primarily built for developers, by developers.</p>
              <p>
                Receive all relevant updates from prominent and oncoming
                projects, guides, resources, research articles. Get informed of
                upcoming events and open job positions.
              </p>
              <p>All in one carefully crafted email.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewsletterPage
