
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx'
import HomePage from './components/HomePage.jsx'
import Regenerator from './components/Regenerator.jsx';
import DocDirectory from './components/DocDirectory.jsx';import './App.css';



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
            <Route path="/" element={<HomePage />} />
            <Route path="Regenerator" element={<Regenerator />} />
            <Route path="DocDirectory" element={<DocDirectory />} />
            <Route path="/Doctors/:id" element={<Regenerator />} />
            <Route path="/About" element={<About />} />
            
          </Routes>
        </div>

    </>
  );
}

export default App;
