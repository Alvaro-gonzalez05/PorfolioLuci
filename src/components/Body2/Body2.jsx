import {Link} from 'react-router-dom';
import * as React from 'react';
import './Body2.css'

export default function Body2(){
    return(
        <div>
            <div className="pagina2">
                <div className="linea">
                    <ul> <hr /></ul>
                    <ul className='texto'>Lucia Miranda</ul>
                </div>
                <div className="contenedor">
                    <div className="info2">
                        <ul>Plataforms</ul>
                        <ul>Technical skills</ul>
                    </div>
                    <div className="info3">
                        <div className="titulo"></div>
                        <div className="lista">
                            <ul>Responsability</ul>
                            <ul>Kindness</ul> 
                            <ul>Adaptability</ul>
                            <ul>Creativity</ul>
                            <ul>Versatility</ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}