import React, { useState } from 'react';
import './FoldableParagraph.scss';
import { GoArrowUp } from 'react-icons/go';

interface FPProps {
  children: any;
  title: string;
  foldState?: boolean;
}

function FoldableParagraph({ children, title, foldState = true }: FPProps) {
  const [folded, setFolded] = useState(foldState);

  return (
    <div className='FPComponent'>
      <h3 onClick={() => setFolded(!folded)}>
        {title}
        <GoArrowUp
          className={folded ? 'FPArrow' : 'FPArrow rotate'}
        />
      </h3>
      <div className={folded ? 'FPWrapper folded' : 'FPWrapper'}>
        {children}
      </div>
    </div>
  )
}

export default FoldableParagraph