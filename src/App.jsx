import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroCarousel from './components/HeroCarousel';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <HeroCarousel />
        <div className="prettyline"></div>
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;