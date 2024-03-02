import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home';
import Footer from './components/footer';
import Header from './components/Header/Header';


function App() {
  useEffect(() => { 
    Aos.init();
  }, []);
  return (
    <div>
      {/* <MainNavbar/> */}
      <Header/>
      <Home/>
      <Footer/>
      </div>
  )
}

export default App