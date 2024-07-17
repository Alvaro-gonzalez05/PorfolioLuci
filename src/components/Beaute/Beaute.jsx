import './Beaute.css'
import * as React from 'react';
import bea1 from './img/1.png';
import bea2 from './img/2.png'

import {Link} from 'react-router-dom';


export default function Beaute(){
    return(
        <div className='contenedor1'>
            
            <div className="paginaElsitio">
            <div className="linea">
                <ul > <hr className='lineav'/></ul>
                <ul className='texto'>LUCIA MIRANDA</ul>
            </div>
                <div className="infoelsitio" id='bea'>
                    <h1 className='text1' id='titulo'>Beauté</h1>
                    
                    <div className="text21" >As a UX/UI designer, I'm thrilled to present Beauté, an aesthetic clinic dedicated to enhancing natural beauty with a touch of elegance and sophistication. Our website reflects this ethos, using soft pink tones to convey freshness and femininity. The beautiful logo we've crafted perfectly encapsulates this vision of timeless beauty. At Beauté, clients can expect high-quality services and exceptional results, all within a warm and personalized environment. I'm excited to have contributed to this project and to share it with you. Discover how Beauté can help you enhance your unique beauty.</div>                
                    <Link to="https://drive.google.com/file/d/141NP2cAKh8srhHTkLEsJCHfIgZEbEdmm/view"><button id='elsitio'> DIGITAL CARD LINK</button></Link>
                </div>

                <div className="imegenesman">
                    <img src={bea1} alt="" />
                    <img src={bea2} alt="" />

                </div>
            </div>
        </div>
    )
}