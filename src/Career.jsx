import React, {Component} from 'react'
import './Career.scss'
import rides from './static/porky.png'

class Career extends Component {
  render() {
    return (
      <div className='career'>
        <h3 className='career-title'>Career</h3>
        <p className='career-subtext'>
          The companies and corperate projects I have worked one
        </p>
        <div className='careers'>
          <div className='card'>
            <img src={rides} alt='Avatar'></img>
            <div className='container'>
              <h4>
                <b>Rides.co</b>
              </h4>
              <p>Ride share site for harley Davidson</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Career
