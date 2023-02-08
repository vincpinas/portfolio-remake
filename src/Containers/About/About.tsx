import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import selfie from '../../Assets/IMG_Selfie_0.png'
import moment from 'moment';
import FoldableParagraph from '../../Components/FoldableParagraph/FoldableParagraph';

function About() {
  return (
    <div id='aboutContainer'>
      <div className="containerAbout">
        <div className="topbar">
          <div className="circles">
            <Link to="/">
              <div className="circle1"></div>
            </Link>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </div>
        <div className="screen">
          <img id="selfie" src={selfie} alt="selfie"></img>
          <div className="text">
            <FoldableParagraph
              title='Who am I?'
              children={
                <p>
                  My name is Vincent Pinas, I'm {moment().diff("20030415", "years", false)} years old, born in 2003 and I live in Noord-Holland.
                  <br></br> 
                  Outside of school I like browsing online to explore all kinds of developments which is not only limited to software,
                  <br></br> 
                  going to the gym and hanging out with friends.
                </p>
              }
              foldState={false}
            />
            <FoldableParagraph
              title='What can I do for you?'
              children={
                <p>
                  Since I am aiming to become a front-end developer or a fullstuck developer I currently mainly work with <a href='https://reactjs.org/' target="_blank" rel="noreferrer">React.js</a>, <a href='https://nodejs.org/' target="_blank" rel="noreferrer">Node.js</a> and <a href='https://www.php.net/' target="_blank" rel="noreferrer">PHP</a>.
                  <br></br>
                  One example of what I made in react would be this entire portfolio.
                  <br></br>
                  I'd like to think I am a eager learner so I am happy to learn any new technologies to get something done.
                </p>
              }
            />
            <FoldableParagraph
              title='My strengths 💪🏾'
              children={
                <p>
                  I am quite a flexible person, I can usually adapt to my environment quite quickly and get in the flow.
                  <br></br>
                  I like to be helpful so if you need anything you can ask me, as long as it's within my abilities of course.
                </p>
              }
            />
            <FoldableParagraph
              title='Future goals 🔮'
              children={
                <p>
                  I am currently aiming to perfect my knowledge of React and to start working more on backend solutions using Node.
                  <br></br>
                  While I'm making projects to work on those skills I will also be working on my planning skills.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
