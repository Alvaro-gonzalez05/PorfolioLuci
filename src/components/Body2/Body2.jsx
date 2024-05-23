import {Link} from 'react-router-dom';
import * as React from 'react';
import './Body2.css'
import instagram from '../../multimedia/instagramlogo.png'
import linkedin from '../../multimedia/linkedin.png'
import ilustrator from '../../multimedia/ilustrator.png'
import photoshop from '../../multimedia/photoshop.png'
import figma from '../../multimedia/figma.png'
import canva from '../../multimedia/canva.png'
import responsabilidad from '../../multimedia/responsabilidad.png'
import corazon from '../../multimedia/corazon.png'
import adaptabilidad from '../../multimedia/adaptabilidad.png'
import creatividad from '../../multimedia/creatividad.png'
import versatilidad from '../../multimedia/versatilidad.png'


export default function Body2(){
    return(
        <div>
            <div className="pagina2">
                
                <div className="contenedor">
                    <div className="info2">
                        <div className='plataform'>Plataform
                            <br />
                            <br />
                            <div className='back'>
                                <img src={instagram} alt="" />
                                <img src={linkedin} alt="" />
                            </div>
                        </div>
                        <div className='tech'>Technical Skills
                            <div className="back1">
                                <img src={ilustrator} alt="" />
                                <img src={photoshop} alt="" />
                                <img src={figma} alt="" />
                                <img src={canva} alt="" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="info3">
                        <div className="titulo">
                            <ul> <hr className='lineah' /></ul>
                            <ul >SOFT SKILLS</ul>
                        </div>
                        <div className="lista">
                            <div className="logos"><img src={responsabilidad} alt="" />
                            Responsability
                            </div>
                            <div className="logos"> <img src={corazon} alt="" />
                            Kindness</div>
                            <div className="logos"><img src={adaptabilidad} alt="" />
                            Adaptability</div>
                            <div className="logos"><img src={creatividad} alt="" />
                            Creativity</div>
                            <div className="logos"><img src={versatilidad} alt="" />
                            Versatility</div>
                        </div>
                    </div>
                <div className="linea">
                    <ul > <hr className='lineav'/></ul>
                    <ul className='texto'>LUCIA MIRANDA</ul>
                </div>
                </div>

            </div>
        </div>
    )
}