import React from 'react'
import './App.css'
import SideNavBar from './components/SideNavBar'
import Header from './components/Header'
import Projects from './components/Projects'
import Career from './components/Career'
import About from './components/About'


function App() {

  return (
    <div className='App'>
      < SideNavBar/>
      <main>
      < Header/>
      < Projects/>
      < Career/>
      < About/>
      </main>
    </div>
  )
}

export default App
