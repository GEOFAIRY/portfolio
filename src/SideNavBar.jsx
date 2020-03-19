import React, {Component} from 'react'
import './SideNavBar.scss'
import profile from './static/profile.jpg'

class SideNavBar extends Component {
  constructor(props) {
    super(props)
    this.handleProfileClick = this.handleProfileClick.bind(this)
    this.handleProjectClick = this.handleProjectClick.bind(this)
    this.handleCareerClick = this.handleCareerClick.bind(this)
    this.handleAboutClick = this.handleAboutClick.bind(this)
  }

  handleProfileClick() {
    window.scrollTo(0, 0)
  }

  handleProjectClick() {
    window.scrollTo(0, 800)
  }

  handleCareerClick() {
    window.scrollTo(0, 1600)
  }

  handleAboutClick() {
    window.scrollTo(0, 2400)
  }

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
            <div className='nav-link' onClick={this.handleProfileClick}>
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
              <span className='link-text'>Profile</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className='nav-link' onClick={this.handleProjectClick}>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='th-large'
                className='svg-inline--fa fa-th-large fa-w-16'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z'
                ></path>
              </svg>
              <span className='link-text'>Projects</span>
            </div>
          </li>
          <li className='nav-item'>
            <div className='nav-link' onClick={this.handleCareerClick}>
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
          <li className='nav-item'>
            <div className='nav-link' onClick={this.handleAboutClick}>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='question'
                className='svg-inline--fa fa-question fa-w-12'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'
              >
                <path
                  fill='currentColor'
                  d='M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z'
                ></path>
              </svg>
              <span className='link-text'>About</span>
            </div>
          </li>
          <li className='nav-item'>
            <a href='http://kyranstagg.co.nz/Resume-kyran-stagg.pdf'>
              <div className='nav-link'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='file-download'
                  className='svg-inline--fa fa-file-download fa-w-12'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='currentColor'
                    d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z'
                  ></path>
                </svg>
                <span className='link-text'>Resume</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SideNavBar
