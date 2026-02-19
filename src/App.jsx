import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Pdf from './components/Pdf'
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        
  <nav className="navbar navbar-expand-lg  fixed-top">
  <div className="container-fluid" >
    
    <Link className="navbar-brand text-white custom-link" to="/">
      <i className="bi bi-house-fill"></i> <b>Home</b>
    </Link>

    <Link className="nav-link text-white custom-link" to="/about">
      <i className="bi bi-person"></i><b> About</b>
    </Link>

    <Link className="nav-link text-white custom-link" to="/project">
      <i className="bi bi-journal-bookmark-fill"></i><b> Project</b>
    </Link>

    <Link className="nav-link text-white custom-link" to="/pdf">
      <i className="bi bi-file-pdf"></i><b> Resume </b>
    </Link>

  </div>
</nav>

         

        <Routes>
          <Route path='/' element={<Header />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/project' element={<Project />}/>
         <Route path='/pdf' element={<Pdf />}/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App