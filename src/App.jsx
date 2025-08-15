import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";
import "./App.css";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={350}
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
           <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/CV" element={<CV />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;