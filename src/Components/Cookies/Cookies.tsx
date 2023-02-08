import React, { useState } from 'react';
import Cookies from 'cookies-js';
import { Link } from 'react-router-dom';
import './Cookies.scss';


function CookiesNotice() {
  const cookiesSet = Cookies.get('cookies-accepted') ? Cookies.get('cookies-accepted') : false
  const [ani, setAni] = useState(false);
  const [keepElement, setKeepElement] = useState(true);
  const setCookiesAccepted = () => {
    setAni(true);
    setTimeout(() => { Cookies.set('cookies-accepted', true); setKeepElement(false); }, 1000)
  }

  return (
    <>
      {
        !cookiesSet && keepElement ? (
          <div className={ani ? 'cookiesNotice accepted' : 'cookiesNotice'}>
            <span className='cookiesInfo'>
              This site is using cookies to ensure a satisfying experience. Click <Link to='/privacy'>here</Link> for the privacy policy.
            </span >
            <button onClick={setCookiesAccepted}>Ok, got it!</button>
          </div>
        ) : null
      }
    </>
  )
}

export default CookiesNotice;
