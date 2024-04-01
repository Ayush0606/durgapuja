
import React from 'react'
import './team.css'
import Navbar from '../HomePage/Navbar/Navbar';



const Team = () => {
  return (<>
    <div className='teamPage'>
   <div className='navbar' >
        <Navbar/>
      </div>
    </div>

    <div className='teamContainer'>
      <div className='teamMates'>
       <div className='teamHeading'> <h1> Meet The Team </h1></div>
        
          
      
      </div>
    </div>
    </>
  )
}

export default Team;

///<img src={teamPhoto} />
// <div className='coreHeading'> <h1>Core Team Members</h1></div>
