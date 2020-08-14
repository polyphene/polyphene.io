import React, { useState } from "react"
import * as EmailValidator from 'email-validator';
import axios from "axios";
import Layout from "../components/layout"
import SEO from "../components/seo"
import contactImage from "../../static/images/undraw_work_chat_erdt.svg"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [subscribe, setSubscribe] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [pending, setPending] = useState(false)

  const canSubmit = (name !== "" && EmailValidator.validate(email))

  const handleSubmit = async e => {
    e.preventDefault()
    // submit message
    setPending(true)
    try {
      await axios.post('https://contact-form-api.evidence.fyi/submit', {
        name,
        email,
        company,
        message,
        subscribe,
      })
    } catch (e) {
      setPending(false)
      return
    }
    setShowSuccess(true)
    // reset form
    setName("")
    setEmail("")
    setCompany("")
    setMessage("")
    setSubscribe(false)
    setPending(false)
  }

  return (
    <Layout>
        <SEO title="Contact"/>

        <div className={"page-header"}>
            <h2>Contact</h2>
            <p>Building a community in the hope of best meeting its expectations is one of our top priorities.</p>
        </div>

        <div className={"container"}>
            <div className={"content"}>
                <div className={"row"}>

                    <div className={"col-7"}>
                      <div className="form-style-8">
                        {showSuccess
                          ? (
                            <div>
                              <p>
                                Thank you for your message!<br/>
                                A member of our team will follow up shortly.
                              </p>
                              <input type="submit" value="Reset Contact Form" onClick={() => {setShowSuccess(false)}}/>
                            </div>
                          ) : (
                            <form onSubmit={handleSubmit}>
                              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name"/>
                              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                              <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company"/>
                              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message"/>
                              <input type="checkbox" value={subscribe} onChange={e => setSubscribe(e.target.checked)}/>
                              <label htmlFor="subscribe">Subscribe to our newsletter.</label>
                              <input type="submit" value="Send Message" disabled={!canSubmit || pending}/>
                            </form>
                        )}
                      </div>
                    </div>

                      <div className={"col-5"}>
                          <img alt={"Contact"} src={contactImage}/>
                          <p>Please use this form to get in touch and/or subscribe to our newsletter.</p>
                          <p>Plain email is also a good way to contact us: <a href={"mailto:contact@evidence.fyi"}>contact@evidence.fyi</a>.</p>
                      </div>
                </div>
            </div>
        </div>
    </Layout>
)
}

export default ContactPage
