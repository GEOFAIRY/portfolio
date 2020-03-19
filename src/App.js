import React from 'react'
import './App.css'
import SideNavBar from './SideNavBar'
import Header from './Header'
import Projects from './Projects'
import Career from './Career'


function App() {
  

  return (
    <div className='App'>
      < SideNavBar/>
      <main>
      < Header/>
      < Projects/>
      < Career/>
      </main>
    </div>
  )
}

export default App
