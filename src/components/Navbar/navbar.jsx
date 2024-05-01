import './navbar.css';
import {Link} from 'react-router-dom';
import * as React from 'react';
import { FiInstagram } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";



export default function Navbar(){
    return(
        <div className="menulateral">
            <div className="superior">
                <li className="logo"><a href=""></a></li>
                <h5>Ux ui desinger and product manager</h5>

            </div>
            <div className="inferior">
                <li><a href="">About me</a></li>
                <li><a href="">My skills</a></li>
                <li><a href="">My jobs</a></li>
                <li><a href="">How can I help you?</a></li>
            </div>
            <div className="redes">
                <li><FiInstagram /></li>
                <li><TiSocialLinkedin /></li>
            </div>
        </div>
    )
}