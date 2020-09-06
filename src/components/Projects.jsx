import React, {Component} from 'react'
import '../css/Projects.scss'
import odms from '../static/odms.webp'
import destiny from '../static/Destiny.webp'
import browser from '../static/browser.webp'
import github from '../static/github.webp'
import seek from '../static/seek.webp'
import odmsalt from '../static/odms.png'
import destinyalt from '../static/Destiny.png'
import browseralt from '../static/browser.png'
import githubalt from '../static/github.png'
import seekalt from '../static/seek.png'

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
            <img src={odms} alt={odmsalt}></img>
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
            <img src={destiny} alt={destinyalt}></img>
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
            <img src={seek} alt={seekalt} id="seek-img"></img>
            <div className='card-container'>
              <h4>
                <b>Seek Job Scraper</b>
              </h4>
              <p>Notifies when a new job is posted</p>
            </div>
          </div>
          </a>
          <a href='https://github.com/GEOFAIRY/portfolio'>
          <div className='card'>
            <img src={browser} alt={browseralt}></img>
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
            <img src={github} alt={githubalt}></img>
            <p>More projects viewable on Github.com/GEOFAIRY</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
