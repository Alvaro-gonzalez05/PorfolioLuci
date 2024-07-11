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
                    <li className='boton'><a href="/#1">About me</a></li>
                    <li className='boton'><a href="/#2">My skills</a></li>
                    <li className='boton'><a href="/#3">How can I help you?</a></li>
                    <li className='boton' ><a href="/Jobs and Proyects">My jobs</a></li>
                </div>
                <div className="redes">
                    <li><FiInstagram className='icono'/></li>
                    <li><TiSocialLinkedin className='icono' /></li>
                </div>
            </div>
            
         </label>   
    )   
}