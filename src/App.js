import React from 'react'
import './App.css'
import SideNavBar from './SideNavBar'
import Header from './Header'
import Projects from './Projects'


function App() {
  

  return (
    <div className='App'>
      < SideNavBar/>
      <main>
      < Header/>
      < Projects/>
      </main>
    </div>
  )
}

export default App
