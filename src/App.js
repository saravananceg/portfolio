import React from 'react';
import logo from './logo.svg';
import './Theme/default.scss';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { ParallaxStar } from './BackgroundStars/stars';
import { LandingPage } from './LandingPage/LandingPage';
import { AboutMe } from './AboutMe/AboutMe';
import { Works } from './Experience/Experience';
import { Skills } from './Skills/Skills';

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
