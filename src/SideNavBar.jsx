import React, {Component} from 'react'
import './SideNavBar.scss'
import profile from './static/profile.jpg'

class SideNavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <div className='nav-profile'>
              <img className='nav-profile-image' src={profile} alt='' />
              <h3 className='nav-profile-text'>Kyran Stagg</h3>
              <span className='nav-profile-subtext'>Software Engineer</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className='nav-link'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='address-card'
                className='svg-inline--fa fa-address-card fa-w-18'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z'
                ></path>
              </svg>
              <span className='link-text'>About</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className='nav-link'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='briefcase'
                className='svg-inline--fa fa-briefcase fa-w-16'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z'
                ></path>
              </svg>
              <span className='link-text'>Career</span>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SideNavBar
