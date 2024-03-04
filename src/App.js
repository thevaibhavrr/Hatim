import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About";
import "animate.css"; 


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
