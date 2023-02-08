import React from 'react';
import './ThemeToggle.scss';

interface TTProps {
  theme: string;
  themeSetter: () => void;
}

function ThemeToggle({ theme, themeSetter}: TTProps) {
  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn" onChange={themeSetter} defaultChecked={theme === 'light' ? false : true} />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  )
}

export default ThemeToggle;
