import './elsitio.css'
import * as React from 'react';
import elsitio1 from './img/1.png';
import elsitio2 from './img/2.png'
import elsitio3 from './img/3.png'
import elsitio4 from './img/4.png'
import elsitio5 from './img/5.png'
import elsitio6 from './img/6.png'

import {Link} from 'react-router-dom';


export default function Elsitio(){
    return(
        <div className='contenedor1'>
            
            <div className="paginaElsitio">
            <div className="linea">
                <ul > <hr className='lineav'/></ul>
                <ul className='texto'>LUCIA MIRANDA</ul>
            </div>
                <div className="infoelsitio">
                    <h1 className='text1'>El Sitio Restobar</h1>
                    
                    <div className="text21">As part of my professional experience, I have had the privilege to collaborate with the restaurant 'El Sitio' in various aspects of their digital presence and branding. Among my notable contributions are the design and development of their interactive digital menu, the creation of their business cards and promotional brochures, as well as the ongoing development of their website. These projects have not only enhanced the image and accessibility of 'El Sitio', but have also strengthened their connection with customers both in the physical and digital realms.</div>                
                    <Link to="https://drive.google.com/file/d/141NP2cAKh8srhHTkLEsJCHfIgZEbEdmm/view"><button id='elsitio'> DIGITAL CARD LINK</button></Link>
                </div>

                <div className="imegeneselsitio">
                    <img src={elsitio1} alt="" />
                    <img src={elsitio2} alt="" />
                    <img src={elsitio3} alt="" />
                    <img src={elsitio4} alt="" />
                    <img src={elsitio5} alt="" />
                    <img src={elsitio6} alt="" />
                </div>
            </div>
        </div>
    )
}