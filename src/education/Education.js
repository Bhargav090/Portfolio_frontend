import React from 'react'
import './edu.css'
function Education() {
  return (
    <div className='education'>
        <h2 className='edu'>Education</h2>
        <div className='edu-container'>
           <div className='text'>
           <h2>SRM University, AP</h2><br></br>
            <h3>B.Tech in Electronics and Communication Engineering</h3>
            <h3>CGPA :  8.59</h3><br></br>
           </div>
           <h2 className='text'>~ 2021-2025</h2>
        </div><br></br><br></br>
        <div className='edu-container ct-2'>
            <div className='text'>
            <h2>INTERMEDIATE: SRI VISWA, AP</h2>
            <h3>Percentage :  93.9</h3>
            </div>
            <h2 className='text'>~ 2019-2021</h2>
        </div><br></br><br></br>
        <div className='edu-container ct-3'>
            <div className='text'>
            <h2>School: Bhashyam High School, AP</h2>
            <h3>Percentage :  90.25</h3>
            </div>
            <h2 className='text'>~ 2018-2019</h2>
        </div>
    </div>
  )
}

export default Education