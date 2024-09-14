import * as React from 'react';
import './proyects.css'

import {Link} from 'react-router-dom';




export default function Proyects(){
    return(
        <div>
            <div className="pagina2" >
                
                <div className="contenedor">
                    <div className="info2">
                        <div className='plataform1'>Jobs And Proyects
                            
                            <div className='back'>
                             
                            </div>
                        </div>
                     
                        
                    </div>
                    <div className="info31">
                        <div class="container">
                            <div class="card">
                                <div class="card__image"></div>
                                <div class="card__content">
                                <Link to="/Elsitio"><button className='button1'> See More
                                </button></Link>
                                    <p class="card__describe">
                                    Developed a digital menu for a restaurant, including rebranding, focused on enhancing UX/UI.                                    </p>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card__image"></div>
                                <div class="card__content">
                                <Link to="/WineGuide"><button className='button1'> See More
                                </button></Link>
                                    <p class="card__describe">
                                    Developed WineGuide, a Mendoza tourism app with intuitive UX/UI for personalized winery tours.                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image"></div>
                                <div class="card__content">
                                <Link to="/ManDenimCulture"><button className='button1'> See More
                                </button></Link>
                                    <p class="card__describe">
                                    Developed a website for MAN, a clothing brand, focused on enhancing UX/UI and visual appeal.                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image"></div>
                                <div class="card__content">
                                <Link to="/Beauté"><button className='button1'> See More
                                </button></Link>
                                    <p class="card__describe">
                                    Developed a website for Beauté, a beauty brand, focused on improving UX/UI and visual appeal.                                    </p>
                                </div>
                            </div>
                            
                            </div>
                           

                    </div>
                <div className="linea" id='lineap' >
                    <ul > <hr className='lineav'id='pro'/></ul>
                    <ul className='texto'>LUCIA MIRANDA</ul>
                </div>
                </div>

            </div>
        </div>
        
    )
}