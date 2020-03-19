import React, {Component} from 'react'
import './Career.scss'
import rides from './static/porky.png'
import countdown from './static/countdown.jpg'

class Career extends Component {
  render() {
    return (
      <div className='career'>
        <h3 className='career-title'>Career</h3>
        <p className='career-subtext'>
          The companies and corporate projects I have worked for
        </p>
        <div className='careers'>
            <a href="http://rides.co/">
          <div className='card-career'>
            <img src={rides} alt='Avatar' style={{ marginTop: "10rem" }}></img>
            <div className='container'>
              <h4>
                <b>Rides.co</b>
              </h4>
              <p>Ride share site for harley Davidson</p>
            </div>
          </div>
          </a>
          <div className='card-career'>
            <img src={countdown} alt='Avatar' style={{ borderRadius: "50%" }}></img>
            <div className='container'>
              <h4>
                <b>Countdown Supermarkets</b>
              </h4>
              <p>Team member for 6 years</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Career
