import React, {Component} from 'react'
import './Projects.scss'
import odms from './static/odms.png'
import destiny from './static/Destiny.png'
import browser from './static/browser.png'
import github from './static/github.png'
import add from './static/plus.png'

class Projects extends Component {

  render() {
    return (
      <div className='project' id="project">
        <h3 className='projects-title'>Projects</h3>
        <p className='projects-subtext'>
          A few projects I've created in my own time.
        </p>
        <div className='projects'>
          <a href="https://github.com/GEOFAIRY/Team-300-ODMS">
          <div className='card'>
            <img src={odms} alt='Avatar'></img>
            <div className='card-container'>
              <h4>
                <b>Team300 ODMS</b>
              </h4>
              <p>Organ Donation Managment for UC</p>
            </div>
          </div>
          </a>
          <a href="https://github.com/GEOFAIRY/raid-2">
          <div className='card'>
            <img src={destiny} alt='Avatar'></img>
            <div className='card-container'>
              <h4>
                <b>Destiny 2 LFG (WIP)</b>
              </h4>
              <p>Raid group finder for Destiny 2</p>
            </div>
          </div>
          </a>
          <a href='https://github.com/GEOFAIRY/portfolio'>
          <div className='card'>
            <img src={browser} alt='Avatar'></img>
            <div className='card-container'>
              <h4>
                <b>This Web Site!</b>
              </h4>
              <p>A portfolio site for me! This Site! Crazy!</p>
            </div>
          </div>
          </a>
          <div className='card'>
            <img src={add} alt='Avatar'></img>
            <div className='card-container'>
              <h4>
                <b>More on the way</b>
              </h4>
              <p>Watch this space!
                or my Github.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>  
          <div className='footer-card'>
          <a href="https://github.com/GEOFAIRY" >
            <img src={github} alt='Avatar'></img>
            <p>More projects viewable on Github.com/GEOFAIRY</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
