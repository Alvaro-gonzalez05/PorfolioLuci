import './navbar.css';
import * as React from 'react';
import { FiInstagram } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";



export default function Navbar(){
    return(
        <label className='menu'>
            <input type="checkbox" />
            <div className="toogle">
                <span className="top_line common"></span>
                <span className="mid_line common"></span>
                <span className="bottom_line common"></span>
            </div>
            <div className="menulateral">
            
                <div className="inferior">
                    <button className="boton" id='barra'> <a href="/#1">About me</a></button>
                    <button className="boton" id='barra'><a href="/#2">My Skills</a></button>
                    <button className="boton" id='barra'><a href="/#3"> How can i help you?</a></button>
                    <button className="boton" id='barra'><a href="/#4">Record</a></button>
                    
                </div>
                <div className="redes">
                    <a href="https://www.instagram.com/luciamirandd?igsh=dDl1ZWMzMDd3N2F3"><li><FiInstagram className='icono'/></li></a>
                    <a href="https://www.linkedin.com/in/lucia-miranda-6569841b9"><li><TiSocialLinkedin className='icono' /></li></a>
                </div>
            </div>
            
         </label>   
    )   
}