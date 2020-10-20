import React from 'react';
import logo from './logo.svg';
import './scss/base/default.scss';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import ParallaxStar from './js/BackgroundStars/stars';
import LandingPage from './js/LandingPage/LandingPage';
import { AboutMe } from './js/AboutMe/AboutMe';
import Works from './js/Experience/Experience';
import { Skills } from './js/Skills/Skills';

function App() {
  return (
    <>
      <ParallaxStar />
      <LandingPage />
      <AboutMe />
      <Works />
      <Skills />
    </>
  );
}

export default App;
