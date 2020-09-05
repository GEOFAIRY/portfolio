import React, {Component} from 'react'
import '../css/About.scss'

import azure from '../static/azure.webp'
import react from '../static/react.webp'
import nodejs from '../static/nodejs.webp'
import git from '../static/github.webp'
import fontawesome from '../static/fontawesome.webp'
import azurealt from '../static/azure.png'
import reactalt from '../static/react.png'
import nodejsalt from '../static/nodejs.png'
import gitalt from '../static/github.png'
import fontawesomealt from '../static/fontawesome.png'

class About extends Component {
  render() {
    return (
      <div className='about' id="about">
        <h3 className='about-title'>About</h3>
        <div className='tech-info'>
          <h6 className='site-info'>Site built with</h6>
          <a href='http://azure.microsoft.com/'>
            <img src={azure} alt={azurealt} />
          </a>
          <a href='https://reactjs.org/'>
            <img src={react} alt={reactalt} />
          </a>
          <a href='https://nodejs.org/'>
            <img src={nodejs} alt={nodejsalt} />
          </a>
          <a href='http://github.com/'>
            <img src={git} alt={gitalt} />
          </a>
          <a href='https://fontawesome.com/'>
            <img src={fontawesome} alt={fontawesomealt} />
          </a>
        </div>
        <div className='contact-info'>
          <h6 className='site-info'>Contact</h6>
          <p>Email: krs19@live.com</p>
          <p>Phone: +64 27 868 9867</p>
        </div>
      </div>
    )
  }
}

export default About
