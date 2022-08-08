import React, { useState } from 'react'
import axios from "axios";

function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [processingForm, setProcessingForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setProcessingForm(true);
    const options = {
      method: 'POST',
      url: 'https://yhen-zc1.maillist-manage.eu/weboptin.zc',
      params: {
        CONTACT_EMAIL: email,
        LASTNAME: name,
        SIGNUP_SUBMIT_BUTTON: 'Join Now',
        submitType: 'optinCustomView',
        emailReportId: '',
        formType: 'QuickForm',
        zx: '14ace978bf',
        oldListIds: '',
        mode: 'OptinCreateView',
        zcld: '119085b4460d854c',
        zctd: '',
        zc_trackCode: 'ZCFORMVIEW',
        zc_formIx: '3zf4f68d97695680fd2cc6349b761707af07329ea8ed55e3680a2bbec6339bb7cd',
        scriptless: 'yes',
      },
    };
    axios.request(options).then(function () {
      setShowSuccess(true);
    }).catch(function () {
      console.log('failed to submit email');
    }).finally(function () {
      setProcessingForm(false);
    });
  }

  return (
    <section className="relative">
      <div id="request-access" className="absolute h-screen -translate-y-1/4"/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-50 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#EAEAEA" offset="44.317%" />
                    <stop stopColor="#DFDFDF" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#EAEAEA">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-black mb-2">Join our newsletter</h3>
                <p className="text-gray-700 text-lg mb-6">Subscribe to our newsletter for quick updates on Polyphene, Web3 projects and our vision!</p>

                {/* CTA form */}
                <>
                  {showSuccess ? (
                    <p className="btn min-w-fit text-white bg-pink-400 text-center">
                      {'Thanks for signing up! Check the confirmation email 👋'}
                    </p>
                  ) : (
                    <form className="w-full lg:w-auto" onSubmit={onSubmit}>
                      <div className="flex flex-col sm:flex-row justify-center max-w-xs sm:max-w-xl mx-auto lg:mx-0">
                        <input type="email" className="form-input appearance-none w-full sm:w-36 flex-grow bg-gray-200 border border-gray-300 focus:border-gray-400 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500" placeholder="Your email*" aria-label="Your email*" value={email} onChange={e => {setEmail(e.target.value)}} />
                        <input type="text" className="form-input appearance-none w-full sm:w-36 flex-grow bg-gray-200 border border-gray-300 focus:border-gray-400 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500" placeholder="and name…" aria-label="and name…" value={name} onChange={e => {setName(e.target.value)}} />
                        <input type="submit" className={`btn px-6 min-w-fit text-white ${processingForm ? 'bg-pink-500' : 'bg-pink-400' } hover:bg-pink-500 shadow`} value="Sign up"/>
                      </div>
                    </form>
                  )}
                </>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
