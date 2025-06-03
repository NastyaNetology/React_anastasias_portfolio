// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';
import BlogPost from './pages/BlogPost'; // or wherever you placed it
import ProjectForecast from './pages/ProjectForecast';
import WebAppEvents from './pages/WebAppEvents';



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/easy-checks-accessibility" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/forecast" element={<ProjectForecast />} />
        <Route path="/projects/web-app-events" element={<WebAppEvents />} />
      </Routes>
    </Router>
  );
}


