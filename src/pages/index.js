import * as React from 'react'
import AOS from 'aos'
import Home from '../components/Home'
import '../css/style.scss'
import { useEffect } from 'react'
import Seo from '../components/SEO'

const IndexPage = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <div
      className="font-inter antialiased bg-white text-gray-900 tracking-tight"
    >
      <Seo/>
      <Home/>
    </div>
  )
}

export default IndexPage
