import React, {Component} from 'react'
import '../css/About.scss'

// import azure from '../static/azure.webp'
// import react from '../static/react.webp'
// import nodejs from '../static/nodejs.webp'
// import git from '../static/github.webp'
// import fontawesome from '../static/fontawesome.webp'
import azure from '../static/azure.png'
import react from '../static/react.png'
import nodejs from '../static/nodejs.png'
import git from '../static/github.png'
import fontawesome from '../static/fontawesome.png'

class About extends Component {
  render() {
    return (
      <div className='about' id="about">
        <h3 className='about-title'>About</h3>
        <div className='tech-info'>
          <h6 className='site-info'>Site built with</h6>
          <a href='http://azure.microsoft.com/'>
            <img src={azure} alt='azure' />
          </a>
          <a href='https://reactjs.org/'>
            <img src={react} alt='react' />
          </a>
          <a href='https://nodejs.org/'>
            <img src={nodejs} alt='node' />
          </a>
          <a href='http://github.com/'>
            <img src={git} alt='git' />
          </a>
          <a href='https://fontawesome.com/'>
            <img src={fontawesome} alt='font awesome' />
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
