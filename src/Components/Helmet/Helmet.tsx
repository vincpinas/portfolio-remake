import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Helmet() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    document.title = (() => {
      let returnValue = 'Vincent Pinas';

      const locations = [
        { url: `/projects`, title: `All my work` },
        { url: `/about`, title: `Get to know about me` },
        { url: `/contact`, title: `Send me a fun message!` },
        { url: `/`, title: `Vincent Pinas 💜` },
      ]

      locations.forEach(loc => {
        if (loc.url.includes(location.pathname)) returnValue = loc.title
      });

      return returnValue
    })();
  }, [location]);

  return null;
}

export default Helmet;
