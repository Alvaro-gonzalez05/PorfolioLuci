import * as React from 'react';
import './body.css'
import logo from '../../multimedia/Luci.png';
export default function Body(){
    return(
    
        <div className="pagEntera">
            <div className="pagina1" id='1'>
                <h1 className='titulo1'>PORTFOLIO</h1>
                <div className="linea1">
                    <ul > <hr className='lineav'/></ul>
                    <ul className='texto'>LUCIA MIRANDA</ul>
                </div>
                <div className="marco">
                    <div className="info" > <h1>Hello, I'm Lucía Miranda, a 21-year-old Product Manager with a passion for UX/UI Design. I currently work as a freelancer and am always looking for new opportunities to grow professionally. I invite you to visit my portfolio to learn more about my work and experience.</h1></div>
                    <img src={logo} alt="" className="logo" />
                </div>
                
            </div>

        </div>
    )
}