import React from 'react';
import * as FA from 'react-icons/fa'
import ContactForm from './ContactForm';
import './Contact.scss';
import RubberSpan from '../../Components/RubberSpan/RubberSpan';

function Contact() {
  return (
    <div id='contactContainer'>
      <h1><RubberSpan letters="Contact" margin={15}/><RubberSpan letters="Me"/></h1>
      <h3 className='contactHeading'>Any questions? Write a quick message!</h3>
      <div id='contactFormWrapper'>
        <div className='contactInfo'>
          <h3>Contact Information</h3>
          <p>Fill in the contact form and I'll try <br /> to get back to you as soon as possible!</p>
          <ul>
            <li>
              <a href={`tel:+31 6 82 794 205`} rel='noreferrer'>
                <FA.FaPhoneAlt />
                +31 6 82 794 205
              </a>
            </li>
            <li>
              <a href="mailto:ikbengerrit92@gmail.com" target='_blank' rel='noreferrer'>
                <FA.FaMailBulk />
                Ikbengerrit92@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.google.nl/maps" target='_blank' rel='noreferrer'>
                <FA.FaCompass />
                Noord-Holland, Uithoorn
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
