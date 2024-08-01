import React, { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar
          scrollToHome={() => scrollToSection(homeRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToAbout={() => scrollToSection(aboutRef)}
        />
        <ScrollToTop />
        <div ref={homeRef}><Home /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={aboutRef}><About /></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

