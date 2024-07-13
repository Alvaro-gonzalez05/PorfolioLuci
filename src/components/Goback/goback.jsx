import * as React from 'react';
import {Link} from 'react-router-dom';
import Flecha from './flecha-hacia-atras.png'
import './goback.css'


export default function Goback(){
    return(
        <div>
            <Link to="/"><div className='burbuja'><img src={Flecha} alt="" /></div></Link>
        </div>
    )
}