import React from 'react'
import { Link } from "react-router-dom"


export const HeadScreen=()=> {
  return (
    <div className='headScreen' id='header'>
        <p className='p'>PAROISSE SAINT LOUIS DE BONABéRI</p>
        <p className='playfair-font'>"L'honneur et la vertu sont les seuls biens véritables<br/>
        que l'homme puisse posséder."</p>
        <button className='top-button'> <Link to="/about">Je clique, je donne</Link></button>
    </div>
  )
}
