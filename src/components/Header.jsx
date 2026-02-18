import React from 'react'
import './Header.css'
import profileimg from'../assets/image/profile.jpeg'
import devimg from '../assets/image/dev.avif'
import {Typewriter} from "react-simple-typewriter"

const Header = () => {
  return (
    <div className='container'>

  
<div className='hi'>
  <div className="name">
  <h2>Hii</h2>

    <h1>I'm <span style={{"color":"orange"}}>SYED KHALEEL S</span></h1><br/><br/>
<h4>
    <Typewriter
      
      words={["Frontend Developer","Java","Javascript","MySql","React","Springboot"]}
      loop={true}
      cursor
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={1500}
      
    />
    </h4>
    </div>
    <div className="img1">

    <img src={devimg} alt='developer'></img>
    </div>
    </div>
    <div className="second">
    <div className="introduction">
      <h1>LET ME <span style={{"color":"green"}}>INTRODUCE</span> MYSELF</h1><br/><br/><br/>
     <p>I'am Syed khaleel S. I completed my B.com Degree in J.H.A Agarsen college, Chennai (Madras University) and graduated in the year 2025 batch.<br/><br/>
      I am fluent in classics like <i><span style={{"color":"green"}}>java and Javascript.</span></i><br/><br/>
     My field of Interest's are building new: <i><span style={{"color":"green"}}>Web Technologies and Products</span></i><br/><br/>
     I have a strong foundation in programming and web development, with skills in JavaScript and React.js. I am also proficient in problem-solving and algorithms.</p>
    </div>

    <div className="profile">
      <img src={profileimg} alt='...profile'></img>
    </div> 
    </div>
     <div className="find">
      <h1>FIND ME ON</h1>
      <h3>This</h3>
      
      <table>
        <tr>
         <td><a href=''><i className="bi bi-github"></i></a></td>
         <td><a href=''><i className="bi bi-linkedin"></i></a></td>
        </tr>
      </table>
    </div>
    </div>
  )
}

export default Header