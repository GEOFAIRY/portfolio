import React, { Component } from 'react'
import '../css/Career.scss'
import rides from '../static/porky.webp'
import countdown from '../static/countdown.webp'
import nzesl from '../static/nzesl.webp'
import work from '../static/work.webp'
import ridesalt from '../static/porky.png'
import countdownalt from '../static/countdown.jpg'
import nzeslalt from '../static/nzesl.png'
import workalt from '../static/work.png'

class Career extends Component {
  render() {
    return (
      <div className='career' id='career'>
        <h3 className='career-title'>Career</h3>
        <p className='career-subtext'>
          The companies and corporate projects I have worked for
        </p>
        <div className='careers'>
        <a href='https://electronicshelflabelling.co.nz/'>
            <div className='card-career'>
              <img
                src={nzesl}
                alt={nzeslalt}
                id="nzesl-img"
              ></img>
              <div className='container'>
                <h4>
                  <b>NZESL</b>
                </h4>
                <p>Contracted Developer</p>
              </div>
            </div>
          </a>
          <a href='http://rides.co/'>
            <div className='card-career'>
              <img
                src={rides}
                alt={ridesalt}
                id="rides-img"
              ></img>
              <div className='container'>
                <h4>
                  <b>Rides.co</b>
                </h4>
                <p>Harley Davidson ride share</p>
              </div>
            </div>
          </a>
          <a href='http://countdown.co.nz/'>
            <div className='card-career'>
              <img
                src={countdown}
                alt={countdownalt}
                style={{ borderRadius: '50%' }}
              ></img>
              <div className='container'>
                <h4>
                  <b>Countdown Supermarkets</b>
                </h4>
                <p>Team member for 6 years</p>
              </div>
            </div>
          </a>
          <div className='card-career'>
              <img
                src={work}
                alt={workalt}
              ></img>
              <div className='container'>
                <h4>
                  <b>Hire Me!</b>
                </h4>
                <p>Opportunity is calling</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Career
