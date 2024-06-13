import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Body from './components/Body/body';
import Body2 from './components/Body2/Body2';
import Body3 from './components/Body3/Body3';
import Body4 from './components/Body4/Body4';




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
          <Body4 />
          </>
        } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
