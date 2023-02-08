import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'cookies-js';
import './Scss/App.scss'
import Helmet from './Components/Helmet/Helmet';
import CookiesNotice from './Components/Cookies/Cookies';
import Home from './Containers/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Containers/Contact/Contact';
import { hexToRgb, themeGet, themes } from './static';
import About from './Containers/About/About';
import Projects from './Containers/Projects/Projects';

function App() {
  const [theme, setTheme] = useState<string>(themeGet);
  const themeSetter = () => { theme === 'light' ? setTheme('dark') : setTheme('light'); }

  useEffect(() => {
    let root = document.documentElement;
    if (theme === 'light') themes.light.forEach(prop => { 
      root.style.setProperty(prop.property, prop.value); 
      root.style.setProperty(`${prop.property}-rgb`, hexToRgb(prop.value)); 
    });
    else if (theme === 'dark') themes.dark.forEach(prop => { 
      root.style.setProperty(prop.property, prop.value); 
      root.style.setProperty(`${prop.property}-rgb`, hexToRgb(prop.value)); 
    });
    Cookies.set('theme', theme);
  }, [theme]);

  return (
    <div className={`appWrapper ${theme}`}>
      <Helmet />
      <CookiesNotice />
      <Navigation themeSetter={themeSetter} theme={theme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
