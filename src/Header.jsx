import React, {Component} from 'react'
import './Header.scss'
import profile from './static/profile.jpg'

class Header extends Component {
  render() {
    return (
      <div className="header">
          <img className="header-profile" src={ profile } alt=""/>
          <h1 className="header-title">Kyran Stagg</h1>
          <h4 className="header-subtitle">Software Engineer</h4>
          <i className="fas fa-arrow-down"></i>
      </div>
    )
  }
}

export default Header
