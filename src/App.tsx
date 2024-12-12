

import './App.css'
import About from './components/About'

import Header from './components/Header'
import Introduction from './components/Introdution'

import ProfilePic from './components/Profile'
import ProgressBar from './components/ProgressBar'
import Skill from './components/Skills'

import SideBar from './components/Sidebar'
import Contact from './components/contact'
import Portfolio from './components/Portfolio'
import Experience from './components/experience'

function App() {
 
 
  return (
    <div className='w-screen'>
      <Header/>
      <SideBar/>
      <div className='ml-[90px]  
      grid grid-cols-1 md:grid-cols-3
      '>
        <div className='col-span-2 p-5 mt-[90px]'>
            <Introduction/>
            <About/>
            <Skill/>
            <Portfolio />
            <Experience />
            <Contact />
         
        </div>
        <div className='hidden md:block'>
          <ProgressBar/>
          <ProfilePic/>
       
        </div>
      </div>
      
    </div>
  )
}

export default App