import * as React from 'react';
import './cvu.css'
import {Link} from 'react-router-dom';

export default function CVU(){
   
    return(
        <div className='CVU' id='4'>
            <h1 className="titulo2">CERTIFICATES & CV</h1>
           
           <div className="container1" id='certificados'>
                <div class="card">
                    <div class="card__image2"></div>
                    <div class="card__content">
                    <a href={require('./multimedia/certificado1.jpg')}><button className='button1'> See More
                    </button></a>
                        <p class="card__describe">I earned a certificate in web development with a focus on HTML, where I learned the fundamentals of building structured web pages. I developed skills to create interactive websites using tags, links, tables, forms, and basic styling. Additionally, I worked on practical projects that enhanced my understanding of web semantics and accessibility.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__image2"></div>
                    <div class="card__content">
                    <a href={require('./multimedia/certificado2.jpg')}><button className='button1'> See More
                    </button></a>
                        <p class="card__describe">I earned a certificate as a Product Manager, where I learned to manage the entire product lifecycle, from conception to launch. I developed skills in market research, product definition, roadmap planning, and coordinating with cross-functional teams. I also worked on projects that allowed me to apply agile strategies and make data-driven decisions to improve user experience and achieve business goals.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__image2"></div>
                    <div class="card__content">
                    <Link to="/"><button className='button1'> COMING SOON...
                    </button></Link>
                        <p class="card__describe">I am currently enrolled in an advanced intensive UX/UI program, focused on designing intuitive and efficient user experiences, as well as enhancing the usability and aesthetics of digital interfaces.</p>
                    </div>
                </div>
           </div>
            
            <div class="container1" id='certificados1'>
                
                            <div class="card">
                                <div class="card__image1"></div>
                                <div class="card__content">
                                <a href={require('./multimedia/cvespañol.pdf')} id='cvSpanish'
                                download="LuciaMirandacvSpanish"><button className='button1' id='download'> Download
                                </button></a>
                                    <p class="card__describe">
                                    This is my CV in Spanish version                                    </p>
                                </div>
                            </div>
                            
                            
                            <div class="card">
                                <div class="card__image1"></div>
                                <div class="card__content">
                                <a href={require('./multimedia/cvingles.pdf')} id='cvSpanish'
                                download="LuciaMirandacvEnglish"> <button className='button1' id='download' >Download</button></a>
                                    <p class="card__describe">
                                    This is my CV in English version                                    </p>
                                </div>
                            </div>
                            
                            
                            </div>
                            <p className='pie'>Lucia Miranda Portfolio  @CodeaDesarrollos</p>
        </div>
    )
}