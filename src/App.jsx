import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Body from './components/Body/body';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
          <Navbar />
          <Body />
          </>
        } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
