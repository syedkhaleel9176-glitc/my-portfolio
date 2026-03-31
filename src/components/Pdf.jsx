import React from 'react'
import './Resume.css'
import resumefile from "../assets/resume/Syed Khaleel S.pdf"

const Pdf = () => {
  return (
    <div>
      <div className="down">
      <h1> Download The Resume</h1><br/>
      <a href={resumefile} download="syed Resume">
        <button type="button" className="btn btn-danger"><i className="bi bi-cloud-arrow-down-fill">Download pdf</i></button>
      </a>
      </div>
    </div>
  )
}

export default Pdf