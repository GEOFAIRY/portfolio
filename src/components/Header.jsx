import React, {Component} from 'react'
import '../css/Header.scss'
import profile from '../static/profile.jpg'
// import profile from '../static/profile.webp'

class Header extends Component {
  render() {
    return (
      <div className="header" id="header">
          <img className="header-profile" src={ profile } alt='profile'/>
          <h1 className="header-title">Kyran Stagg</h1>
          <h4 className="header-subtitle">Software Engineer</h4>
          <i className="fas fa-arrow-down"></i>
      </div>
    )
  }
}

export default Header
