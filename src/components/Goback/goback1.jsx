import * as React from 'react';
import {Link} from 'react-router-dom';
import Flecha from './flecha-hacia-atras.png'
import './goback.css'


export default function Goback1(){
    return(
        <div>
            <Link to="/Jobs and Proyects"><div className='burbuja'><img src={Flecha} alt="" /></div></Link>
        </div>
    )
}