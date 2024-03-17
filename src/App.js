import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import ProjectDetails from './pages/ProjectDetails';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="detailsProject/:Id" element={<ProjectDetails />}/>
        <Route path="About" element={<About />}/>
        <Route path="Projects" element={<Projects />}/>
        <Route path="Contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
