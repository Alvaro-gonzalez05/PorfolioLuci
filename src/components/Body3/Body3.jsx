import {Link} from 'react-router-dom';
import * as React from 'react';
import './Body3.css'
import grafico from '../../multimedia/grafico.png'
import usuarios from '../../multimedia/usuarios.png'
import planificacion from '../../multimedia/planificacion.png'
import pc from '../../multimedia/interface.png'
import feedback from '../../multimedia/feedback.png'
import phone from '../../multimedia/phone.png'

export default function Body3(){
    return(
       <div className="pagina3" id='3'>
            <div className="linea11">
                <ul > <hr className='lineav'/></ul>
                <ul className='texto'>LUCIA MIRANDA</ul>
            </div>
            
            <div className="marco1">
            
                <div className='text'>
                    <div className='text1'>HOW CAN I HELP YOU?</div>
                    <div className='text2'>Hello! As a UX/UI Designer and Product Manager, I'm here to help enhance the user experience of your digital products and maximize their impact. From designing engaging and functional interfaces to optimizing processes and strategic planning, I'm committed to taking your projects to the next level. Ready to collaborate?</div>
                    <Link to="/Jobs and Proyects"><button> My Jobs and proyects</button></Link>
                </div>
                <div className='variables'>

                    <div className="vars">Tracking and analyzing metrics<img src={grafico} alt="" /></div>
                    <div className="vars">Community management<img src={usuarios} alt="" /></div>
                    <div className="vars">Project Planning and Prioritization<img src={planificacion} alt="" /></div>
                    <div className="vars">Intuitive Interface Design<img src={pc} alt="" /></div>
                    <div className="vars">Feedback and Continuous Improvement<img src={feedback} alt="" /></div>
                    <div className="vars">User Experience Optimization<img src={phone} alt="" /></div>
                </div>
            </div>
            <div className='lineauix'>
                <ul >UX/UI DESIGNER AND PRODUCT MANAGER</ul>
                <ul> <hr className='lineah1' /></ul>
                
            </div>
            
            
       </div>
    )
}