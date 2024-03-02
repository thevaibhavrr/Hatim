import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import MainNavbar from './components/Header/mainNavbar';
import Home from './pages/Home';
import Footer from './components/footer';


function App() {
  useEffect(() => { 
    Aos.init();
  }, []);
  return (
    <div>
      <MainNavbar/>
      <Home/>
      <Footer/>
      </div>
  )
}

export default App