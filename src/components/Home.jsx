import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroHome from './HeroHome'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default Home
