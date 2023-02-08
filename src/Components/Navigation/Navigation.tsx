import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Go from 'react-icons/go';
import './Navigation.scss'
import ThemeToggle from './ThemeToggle';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

interface NProps {
  theme: string;
  themeSetter: () => void;
}

function Navigation({ theme, themeSetter}: NProps) {
  const [overlay, setOverlay] = useState<boolean>(false);
  const overlaySetter = () => setOverlay(!overlay);

  return (
    <div id='navigationComponent'>
      <div className={overlay ? 'menuOverlay active' : 'menuOverlay'}>
        <span className='hamMenuWrapper'><Go.GoThreeBars className='hamMenu' onClick={overlaySetter} /></span>
        <ul>
          <Link to='/' onClick={overlaySetter}>Home</Link>
          <Link to='/projects' onClick={overlaySetter}>Projects</Link>
          <Link to='/about' onClick={overlaySetter}>About</Link>
          <Link to='/contact' onClick={overlaySetter}>Contact</Link>
        </ul>
      </div>
      <header id='cHeader'>
        <Link to='/' id='headerLogo'><AnimatedLogo /></Link>
        <div className='headerLinkWrapper'>
          <Link to='/projects'>Projects</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        <ThemeToggle themeSetter={themeSetter} theme={theme} />
        </div>
        <Go.GoThreeBars className='hamMenu' onClick={overlaySetter} />
      </header>
    </div>
  )
}

export default Navigation;
