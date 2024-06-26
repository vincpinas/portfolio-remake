import React from 'react';
import './Tooltip.scss';

interface TProps {
  children: any;
  text: string;
  className?: string;
}

function Tooltip({ children, text, className }: TProps) {

  return (
    <div className={`toolTipWrapper ${className ? className : ""}`}>
      { children }
      <span className={`tooltip ${className ? className : ""}`}>{ text }</span>
    </div>
  )
}

export default Tooltip;
