import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Body from './components/Body/body';
import Body2 from './components/Body2/Body2';
import Body3 from './components/Body3/Body3';
import Proyects from './components/Proyects/proyects';
import Elsitio from './components/Elsitio/elsitio';
import Goback from './components/Goback/goback';
import Goback1 from './components/Goback/goback1';
import WineGuide from './components/Wine/wineguide';
import Man from './components/Man/Man';
import Beaute from './components/Beaute/Beaute';
import CVU from './components/cvu/cvu'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
          <Navbar />
          <Body />
          <Body2 />
          <Body3 />
          <CVU />
          </>
          
        } />
        <Route path='/Jobs and Proyects' element={<>
          <Goback />
          <Proyects />

          
          </>
        } />
        <Route path='/Elsitio' element={<>
          <Goback1 />
          <Elsitio />

          
          </>
        } />
        <Route path='/WineGuide' element={<>
          <Goback1 />
          <WineGuide />

          
          </>
        } />
        
        <Route path='/ManDenimCulture' element={<>
          <Goback1 />
          <Man/>

          
          </>
        } />
        <Route path='/Beauté' element={<>
          <Goback1 />
          <Beaute/>

          
          </>
        } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
