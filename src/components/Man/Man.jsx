import './Man.css'
import * as React from 'react';
import man1 from './img/1.png';
import man2 from './img/2.png'

import {Link} from 'react-router-dom';


export default function Man(){
    return(
        <div className='contenedor1'>
            <div className="linea">
                <ul > <hr className='lineav'/></ul>
                <ul className='texto'>LUCIA MIRANDA</ul>
            </div>
            <div className="paginaElsitio">
            
                <div className="infoelsitio" id='man'>
                    <h1 className='text1' id='titulo'>Man Denim Culture</h1>
                    
                    <div className="text21">As a UX/UI designer and product manager, I've crafted a unique shopping experience at Man Denim Culture, utilizing a sleek palette of black and white. Every detail, from the user interface to product selection, is meticulously designed to provide comfort, style, and authenticity to our customers. Explore our online store and discover how fashion converges in every garment we offer.</div>                
                    
                </div>

                <div className="imegenesman">
                    <img src={man1} alt="" />
                    <img src={man2} alt="" />

                </div>
            </div>
        </div>
    )
}