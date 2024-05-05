import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import RubberSpan from '../../Components/RubberSpan/RubberSpan';
import RotatingWords from '../../Components/RotatingWords/RotatingWords';
import MiniPortfolio from '../../Components/MiniPortfolio/MiniPortfolio';

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const wordsList = [['Web', 'Developer.'], ['Design', 'Student.'], ['Life', 'Enjoyer.'],]

  return (
    <div id='homeContainer'>
      <section className='heroWrapper'>
        <div className='heroText'>
          <h1 className='D-deskOnly'>
            <RubberSpan letters="Hi," br />
            <RubberSpan letters="I'm" margin={10} />
            <RubberSpan letters="V" hero />
            <RubberSpan letters="incent," br />
            <RotatingWords wordsList={wordsList} rubber />
          </h1>
          <h1 className='D-tabletDown'> Hi, <br /> I'm Vincent, <br /> {wordsList[0][0]} {wordsList[0][1]}</h1>
          <p className='noselect'>Based in The Netherlands, Uithoorn</p>
          <Link to='/projects'>Projects</Link>
        </div>
        <MiniPortfolio />
      </section >
    </div >
  )
}

export default Home;
