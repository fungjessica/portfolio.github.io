
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';
import '@fortawesome/fontawesome-svg-core/styles.css';


function App() {
  return (
    <Router basename='/portfolio.github.io'>
      <div className="App">
        <Navbar>
        </Navbar>
          
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
          
      </div>
    </Router>
  );
}

export default App;
