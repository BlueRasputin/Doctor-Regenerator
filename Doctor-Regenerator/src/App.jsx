import { useState } from 'react';
import Header  from './components/Header.jsx';
// import { Footer } from './components/Footer.jsx';
import Regenerator from './components/Regenerator.jsx'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Regenerator />
        {/* <Footer /> */}
      </div>
      
    </>
  )
}

export default App
