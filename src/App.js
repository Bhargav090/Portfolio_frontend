import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Project from './projects/Project';
import Contact from './contact/Contact';
function App() {
  return (
    <div className="App">
      <div class="stars"></div>
      <div class="meteors"></div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Project showNavbar={true}/>}/>
          <Route path='/contact'element={<Contact Isnavbar={true}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
