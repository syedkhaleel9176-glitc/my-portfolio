import React from 'react'
import './About.css'
import compimg  from '../assets/image/comp.jpg'
import atom from '../assets/logoimg/atom.png'
import github from '../assets/logoimg/github.png'
import html from '../assets/logoimg/html.png'
import java from '../assets/logoimg/java.png'
import js from '../assets/logoimg/js.png'
import mysql from '../assets/logoimg/mysql.png'

const About = () => {
  return (
    < div className='Ab'>
      <div className="info">
         <div className="know">
          <h1>Know Who <span style={{"color":"green"}}>I'm</span></h1><br/><br/>
          <p>Hi, I am <span style={{"color":"green"}}>Syed khaleel S </span>from<span style={{"color":"green"}}> Chennai</span>.I am a versatile professional with expertise in Frontend Web Development, Backend Development, 
            and Full-Stack application building. My journey includes crafting user-friendly,
             responsive web experiences and creating interactive dashboards with Power BI to analyze data insights.</p><br/><br/>
          
          <h2>CONTACT INFO:</h2>
          <ul>
            <li>Email: syedkhaleel9176@gmail.com</li>
            <li>Phone: 9176454210</li>
            <li>Linked In: <a></a></li>
            <li>Github:<a></a></li>
          </ul>
          </div>
        <div className="img2">
          <img src={compimg} alt='pc'/>
          </div>
          </div>
        
    
    <div className="skill">
      <div className="set">
        <h1 id='h1'>Professional <span style={{"color":"green"}}>Skillset</span></h1><br/><br/>
        </div>
        <div className="icon">
        <div className='border border-secondary'><img src={atom} alt='atom'></img></div>
        <div className='border border-secondary'><img src={github} alt='atom'></img></div>
        <div className='border border-secondary'><img src={html} alt='atom'></img></div>
        <div className='border border-secondary'><img src={java} alt='atom'></img></div>
        <div className='border border-secondary'><img src={js} alt='atom'></img></div>
        <div className='border border-secondary'><img src={mysql} alt='atom'></img></div>
      </div>
    </div>
    </div>
  )
}

export default About