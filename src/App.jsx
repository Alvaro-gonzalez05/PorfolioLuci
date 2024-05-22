import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Body from './components/Body/body';
import Body2 from './components/Body2/Body2';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
          <Navbar />
          <Body />
          <Body2 />
          </>
        } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
