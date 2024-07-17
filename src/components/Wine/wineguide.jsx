import './wineguide.css'
import * as React from 'react';
import fotowineguide from './img/1.png';
import wine2 from './img/2.png'
import wine3 from './img/3.png'
import wine4 from './img/4.png'


import {Link} from 'react-router-dom';


export default function WineGuide(){
    return(
        <div className='contenedor1'>
            
            <div className="paginaElsitio">
            <div className="linea">
                <ul > <hr className='lineav'/></ul>
                <ul className='texto'>LUCIA MIRANDA</ul>
            </div>
                <div className="infowineguide">
                    <h1 className='text1'>Wine Guide</h1>
                    
                    <div className="text21">WineGuide is a comprehensive tourism app tailored exclusively for Mendoza province, offering meticulously curated tours encompassing accommodation, wineries, wine tastings, and more. Free for all users, WineGuide operates seamlessly offline, ensuring travelers can access vital information even in remote areas. We go beyond traditional offerings by providing packages that include flights, accommodations, meals, and immersive experiences, allowing users to fully immerse themselves in the region's wine culture. With WineGuide, travelers can explore Mendoza province's renowned wine country with confidence and convenience, making every trip an unforgettable journey</div>                
                    <Link to="https://www.canva.com/design/DAF8xG0wST8/59m3nFhlt27_3FNCEHvTRQ/view?mode=prototype"><button > See Desing</button></Link>
                </div>
                <div className="imegeneswineguide">
                    <div className="principal">
                        <img  src={fotowineguide} alt="" />
                        </div>
                    
                    <div className="imegenespagina">
                        <img src={wine2} alt="" />
                        <img src={wine3} alt="" />
                        <img src={wine4} alt="" />
                            
                    </div>
                </div>
                    
            </div>
        </div>
    )
}