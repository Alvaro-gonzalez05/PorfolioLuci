import * as React from 'react';
import './cvu.css'
import {Link} from 'react-router-dom';
import jsPDF from 'jspdf';
import cvespañol from './multimedia/cvespañol.png'
export default function CVU(){
    pdfGenerate=()=>{
        var doc=new jsPDF('landscape','px','a4','false');
        doc.addImage(cvespañol,'PNG',65,20,500,400);
        doc.save('cvespañol.pdf')
    }
    return(
        <div className='CVU' id='4'>
            <h1 className="titulo2">CERTIFICATES & CV</h1>
           
           <div className="container1" id='certificados'>
                <div class="card">
                    <div class="card__image2"></div>
                    <div class="card__content">
                    <Link to="/Elsitio"><button className='button1'> See More
                    </button></Link>
                        <p class="card__describe">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum aperiam voluptates, aliquid ut tenetur dicta quia quas illo vero perspiciatis nisi repellendus nemo, soluta culpa iste voluptatibus a obcaecati?</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__image2"></div>
                    <div class="card__content">
                    <Link to="/Elsitio"><button className='button1'> See More
                    </button></Link>
                        <p class="card__describe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perferendis odio? Temporibus quaerat officiis recusandae est asperiores officia harum sed velit similique dolore, doloremque laboriosam voluptate autem. Explicabo, deserunt molestiae!</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card__image2"></div>
                    <div class="card__content">
                    <Link to="/Elsitio"><button className='button1'> See More
                    </button></Link>
                        <p class="card__describe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perferendis odio? Temporibus quaerat officiis recusandae est asperiores officia harum sed velit similique dolore, doloremque laboriosam voluptate autem. Explicabo, deserunt molestiae!</p>
                    </div>
                </div>
           </div>
            
            <div class="container1" id='certificados1'>
                
                            <div class="card">
                                <div class="card__image1"></div>
                                <div class="card__content">
                                <Link to="/Elsitio"><button className='button1'> Download
                                </button></Link>
                                    <p class="card__describe">
                                    This is my CV in Spanish version                                    </p>
                                </div>
                            </div>
                            
                            
                            <div class="card">
                                <div class="card__image1"></div>
                                <div class="card__content">
                                <button className='button1' onClick={this.pdfGenerate}> Download
                                </button>
                                    <p class="card__describe">
                                    This is my CV in English version                                    </p>
                                </div>
                            </div>
                            
                            
                            </div>
                            <p className='pie'>Lucia Miranda Portfolio  @CodeaDesarrollos</p>
        </div>
    )
}