import React from 'react'


import { Navbar } from '../components/navbar'
import { Screen } from '../components/screen'
import { Bas } from '../components/footer'
import {Horaires} from '../components/horaires'
import{Annonce} from '../Screen/annonce'

import './annonce.css'

import svg from '../pictures/svg.svg';


export const Announces=()=> {
  return (
    <div>
        <Navbar/>
        <Screen/>
        <Horaires/>
        <div className='annonce a' style={{marginLeft:"40%",marginBottom:"20px",marginTop:"50px"}}>
                <img src={svg}  alt=''/>
                <p style={{fontSize:"30px"}}>ANNONCES</p>
            </div>
        <Annonce/>
        <Bas/>
    </div>
);
}


