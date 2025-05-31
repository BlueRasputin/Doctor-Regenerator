
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx'
import HomePage from './components/HomePage.jsx'
import Regenerator from './components/Regenerator.jsx';
import DocDirectory from './components/DocDirectory.jsx';
import Episodes from './components/Episodes.jsx';
import Contact from './components/Contact.jsx';
import './App.css';






function App() {

  return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Regenerator" element={<Regenerator />} />
            <Route path="DocDirectory" element={<DocDirectory />} />
            <Route path="/Doctors/:id" element={<Regenerator />} />
            <Route path="/Episodes" element={<Episodes />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        

    </>
  );
}

export default App;
