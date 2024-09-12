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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card__image"></div>
                                <div class="card__content">
                                <Link to="/WineGuide"><button className='button1'> See More
                                </button></Link>
                                    <p class="card__describe">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image"></div>
                                <div class="card__content">
                                <Link to="/ManDenimCulture"><button className='button1'> See More
                                </button></Link>
                                    <p class="card__describe">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image"></div>
                                <div class="card__content">
                                <Link to="/Beauté"><button className='button1'> See More
                                </button></Link>
                                    <p class="card__describe">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            
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