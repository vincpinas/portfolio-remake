import React, { useRef } from 'react';
import './MiniPortfolio.scss';
import * as TB from 'react-icons/tb';
import moment from 'moment';
import Tooltip from '../Tooltip/Tooltip';
import { avatars } from './imports';
import CV from '../../Assets/CV.pdf';
import { Link } from 'react-router-dom';

function MiniPortfolio() {
  const ref = useRef<HTMLSpanElement>(null);
  const avatar = () => {
    let temp: string = "";
    const d = new Date().getDay();
    avatars.forEach((avatar, index) => {
      if(d === index) temp = avatar;
    });

    return temp;
  }

  function setAnimation() {
    ref.current!.style.animationName = 'circle-expand'
    ref.current!.style.animationDuration = '1s'
    ref.current!.style.animationIterationCount = 'infinite'
  }

  function resetAnimation() {
    setTimeout(() => {
      ref.current!.style.animation = 'none';
      ref.current!.style.animation = '';
    }, 10);
  }


  return (
    <div id='miniPortComponent'>
      <h5 className='hoverInfo'>You can hover on the elements <br /> here for tooltips!</h5>
      <h5 className='hoverInfo avatar'>This avatar changes per day <br /> so check in tomorrow!</h5>
      <Link to='/about' className='imgWrapper' onMouseEnter={setAnimation} onMouseLeave={resetAnimation}>
        <span className="innerBorder" ref={ref} />
        <img src={avatar()} alt="avatar" />
      </Link>
      <div className="infoHeader">
        <h3>Vincent Pinas</h3>
        <h5>Webdeveloper</h5>
      </div>
      <div className='socialsHeader'>
        <a href="https://www.instagram.com/shaftattack/" target="_blank" rel="noreferrer">
          <TB.TbBrandInstagram />
        </a>
        <a href="https://nl.linkedin.com/in/vincent-pinas-a4656b223/" target="_blank" rel="noreferrer">
          <TB.TbBrandLinkedin />
        </a>
        <a href="https://github.com/vincpinas" target="_blank" rel="noreferrer">
          <TB.TbBrandGithub />
        </a>
      </div>
      <div className='detailsHeader'>
        <Tooltip text='Since start of school in 2019'>
          <h5>{moment().diff("20190715", "years", false)}</h5>
          <h5>Years of <br /> work</h5>
        </Tooltip>
        <Tooltip text='Only counts work for real clients'>
          <h5>2+</h5>
          <h5>Completed <br /> projects</h5>
        </Tooltip>
        <Tooltip text='Only counts real clients'>
          <h5>1+</h5>
          <h5>Satisfied <br /> customers</h5>
        </Tooltip>
      </div>
      <div className="miscHeader">
        <Tooltip text='Last updated: 29/09/2022' className='cvWrapper'>
          <a href={CV} download="CV Vincent Pinas - 2022">Download CV <TB.TbDownload /></a>
        </Tooltip>
        <div className='miscSocials'>
          <Tooltip text='You can contact me on WhatsApp 😇'>
            <a href="https://api.whatsapp.com/send?phone=31682794205&text=Hey,%20I%20saw%20your%20portfolio!" target="_blank" rel="noreferrer"><TB.TbBrandWhatsapp /></a>
          </Tooltip>
          <Tooltip text='For the gamers, add my steam! 🎮'>
            <a href="https://steamcommunity.com/id/papachuro/" target="_blank" rel="noreferrer"><TB.TbBrandSteam /></a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default MiniPortfolio;
