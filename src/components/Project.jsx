import React from 'react'
import portimg from "../assets/image/port.png"
import calsimg from "../assets/image/cals.png"
import './Project.css'

const Project = () => {
  return (
    <div>
      <div className="proj">
        <h1>My Recent <span style={{"color":"green"}}>Works</span></h1><br/>
        <h6>Here are a few projects I've worked on recently.</h6>
      </div>
      <div className="view">

        <div className="card" style={{"width":"250px", "height":"380px"}}>
           <img src={calsimg} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Calculator</h5>
           <p className="card-text">Created a functioal calculator using HTML, CSS, and JavaScript. 
            The calculator perform basic arithmatic operations and features a clean, user-friendly interface.</p>
          <a href="#" className="btn btn-primary">Git Hub</a>
          </div>
       </div>

          <div className="card" style={{"width":"250px", "height":"400px"}}>
          <img src={portimg} className="card-img-top" alt="..."/>
          <div className="card-body">
           <h5 className="card-title">Portfolio</h5>
           <p className="card-text">Build a personal portfolio using React.js. The portfolio includes sections for showcasing skills, project, 
            and contact details, implemented with reusable components and state management. </p>
             <a href="#" className="btn btn-primary">Git Hub</a>
           </div>
          </div>
        

      
          <div className="card" style={{"width":"18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Git Hub</a>
          </div>
          </div>
        


      </div>
    </div>
  )
}

export default Project