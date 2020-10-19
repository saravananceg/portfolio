import React, {
  useEffect, useState, useRef, useCallback
} from 'react';
import './navbar.scss';
import { useSelector } from 'react-redux';
import { ReactComponent as WandIcon } from '../images/magic_wand.svg';
import { ReactComponent as AboutMeIcon } from '../images/navigation/aboutme.svg';
import { ReactComponent as SkillsIcon } from '../images/navigation/tools.svg';
import { ReactComponent as HeartIcon } from '../images/navigation/heart.svg';
import ThemeData from './test';

const Navbar = () => {
  const currentTab = useSelector((state) => state.selectedId);

  const navBarItem = useRef(null);

  const [currentTheme, setCurrentTheme] = useState(0);

  const handleThemeSwitch = useCallback(() => {
    setCurrentTheme((val) => ((val + 1) % ThemeData.length));
  }, []);

  useEffect(() => {
    const data = ThemeData[currentTheme];
    const { style } = document.documentElement;

    style.setProperty('--portfolio-bg-color', data.bg);
    style.setProperty('--portfolio-bg-fade-color', `${data.bg}f0`);
    style.setProperty('--portfolio-font-color', data.font);
    style.setProperty('--portfolio-font-fade-color', `${data.font}40`);
    style.setProperty('--portfolio-icon-color', data.icon);
  }, [currentTheme]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    }, { threshold: 0.5 });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <nav className="navbar-container" ref={navBarItem}>
      <ul className="navibar nav-fill">
        <li className={`navlist${currentTab === 'landing' ? ' active' : ''}`}>
          <div>
            <HeartIcon />
          </div>

          <a className="nav-link" href="#landing">Profile</a>
          {/* <PulseDot style={{ transform }} className="pulse-dot" /> */}
        </li>
        <li className={`navlist${currentTab === 'about' ? ' active' : ''}`}>
          <div>
            <AboutMeIcon />
          </div>
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className={`navlist${currentTab === 'works' ? ' active' : ''}`}>
          <div>
            <SkillsIcon />
          </div>
          <a className="nav-link" href="#works">Works</a>
        </li>
        <li className={`navlist${currentTab === 'skills' ? ' active' : ''}`}>
          <div>
            <SkillsIcon />
          </div>
          <a className="nav-link" href="#skills">Skills</a>
        </li>
      </ul>
      <div className="theme-switch" onClick={handleThemeSwitch}>
        <span className="theme-wand">
          <WandIcon />
        </span>
        <span>Do Magic</span>
      </div>
    </nav>
  );
};

export { Navbar };
