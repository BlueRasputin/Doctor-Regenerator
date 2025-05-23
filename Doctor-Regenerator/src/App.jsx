import { useState } from 'react';
import Header  from './components/Header.jsx';
// import { Footer } from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx'

import Regenerator from './components/Regenerator.jsx';
import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// const router = createBrowserRouter([
//   {path:"/", element: <App />},
//   {path:"/Regenerator", element: <Regenerator />},
//   {path:"/About", element: <About />}

// ]);


function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <div>
          <Routes>
            <Route path="/" element={<Regenerator />} />
            <Route path="/About" element={<About />} />
            
          </Routes>
        </div>

    </>
  );
}

export default App;
