
import './App.css';

import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import PortFilio from './Components/PortFilio';
import Experirence from './Components/Experirence';
import Contact from './Components/Contact';



import Navbar from './Components/Navbar';
// import NavBarr from './Components/Navbar2';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />
      
      <Home />
      <About />
      <PortFilio/>
      <Experirence />
      <Contact />
      
      
      <SocialLinks/>
    </div>
    
   
  );
}

export default App;
