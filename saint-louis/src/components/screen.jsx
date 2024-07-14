import React from 'react'
import { Link } from "react-router-dom"


export const Screen=()=> {
  return (
    <div className='Screen' id='header'>
        <p className='p'>PAROISSE SAINT LOUIS DE BONABéRI</p>
        <p className='playfair-font'>"L'honneur et la vertu sont les seuls biens véritables<br/>
        que l'homme puisse posséder."</p>
        
        <button className='top-button tp'><Link to='/' className="home top-button">Back to home</Link></button>
    </div>
  )
}
