import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/base/default.scss';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import ParallaxStar from './js/BackgroundStars/stars';
import LandingPage from './js/LandingPage/LandingPage';
import AboutMe from './js/AboutMe/AboutMe';
import Works from './js/Experience/Experience';
import Skills from './js/Skills/Skills';

function App() {
  return (
    <Router>
      <ParallaxStar />
      <LandingPage />
      <AboutMe />
      <Works />
      <Skills />
    </Router>
  );
}

export default App;
