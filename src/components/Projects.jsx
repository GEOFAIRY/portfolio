import React, {Component} from 'react'
import '../css/Projects.scss'
import odms from '../static/odms.png'
import destiny from '../static/Destiny.png'
import browser from '../static/browser.png'
import github from '../static/github.png'
import seek from '../static/seek.png'

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
          <a href='https://github.com/GEOFAIRY/Seek-Job-Scraper'>
          <div className='card'>
            <img src={seek} alt='Avatar' id="seek-img"></img>
            <div className='card-container'>
              <h4>
                <b>Seek Job Scraper</b>
              </h4>
              <p>Small program to assit me in finding work</p>
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
