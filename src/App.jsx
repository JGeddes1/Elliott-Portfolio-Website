import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Awards, Hero, Navbar, Works, GridCubes } from './components';

// s

function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-white bg-cover-bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        
        <Works />
        <Awards />
        <div className="relative z-0">
          <Contact />
          <GridCubes />
        </div>
      </div>
    
    </BrowserRouter>
  )
}

export default App
