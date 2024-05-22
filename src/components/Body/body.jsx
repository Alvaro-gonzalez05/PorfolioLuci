import {Link} from 'react-router-dom';
import * as React from 'react';
import './body.css'
import logo from '../../multimedia/Luci.png';

export default function Body(){
    return(
        <div className="pagEntera">
            <div className="pagina1">
                <div className="info"> <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ab quia ipsum ut maxime eveniet quas atque ipsam aspernatur libero voluptatum odio fugiat, earum maiores blanditiis deleniti illum. Nostrum, odit.</h1></div>
                <img src={logo} alt="" className="logo" />
            </div>

        </div>
    )
}