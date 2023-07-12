import Header ,{HeaderPhone} from "./Components/Header.jsx"
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
 import Experience from "./Components/Experience.jsx";
 import Project from "./Components/Projects.jsx";
import Position from "./Components/Position.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from"./Components/Footer.jsx";
import{Toaster} from "react-hot-toast";
import { useState,useEffect } from "react";
// y
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  

  return (
  <>
 <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<Home/>
<About/>
 <Experience/>
<Project/>
<Position/>
<Contact/>
<Footer/>
<Toaster/>
</>
 ) 
}

export default App;
