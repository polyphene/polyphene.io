import React  from 'react';
import HoliumLogo from '../images/holium_logo_black.svg';

function HeroHome() {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="64" />
            <circle cx="155" cy="443" r="128" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Give people the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-400">freedom to collaborate</span>
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                {`We develop Web3 projects such as `}
                <a href="https://holium.org" className="underline font-medium">Holium</a>
                .
              </p>
            </div>

            <div className="max-w-xl mx-auto mt-12">
              <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <a href="https://holium.org" className="mb-4">
                  <HoliumLogo className="transition h-10 grayscale hover:grayscale-0 opacity-50 hover:opacity-100"/>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroHome;