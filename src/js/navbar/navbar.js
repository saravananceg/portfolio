import React, {
  useEffect, useState, useRef, useCallback
} from 'react';
import ScrollLink from './ScrollLink';
import '../../scss/landingPage/navbar.scss';

import { ReactComponent as WandIcon } from '../../images/magic_wand.svg';
import { ReactComponent as AboutMeIcon } from '../../images/navigation/aboutme.svg';
import { ReactComponent as SkillsIcon } from '../../images/navigation/tools.svg';
import { ReactComponent as HeartIcon } from '../../images/navigation/heart.svg';
import { ReactComponent as WorkIcon } from '../../images/navigation/suitcase.svg';
import ThemeData from './MagicThemeData';

const Navbar = () => {
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

  return (
    <nav className="navbar-container" ref={navBarItem}>
      <ul className="navibar nav-fill">
        <li className="navlist">
          <ScrollLink smooth className="nav-link" to="home">
            <div className="nav-icon">
              <HeartIcon />
            </div>
            <span>Profile</span>
          </ScrollLink>
        </li>
        <li className="navlist">
          <ScrollLink smooth className="nav-link" to="about">
            <div className="nav-icon">
              <AboutMeIcon />
            </div>
            <span>About</span>
          </ScrollLink>
        </li>

        <li className="navlist">
          <ScrollLink smooth className="nav-link" to="works">
            <div className="nav-icon">
              <WorkIcon />
            </div>
            <span>Works</span>
          </ScrollLink>
        </li>

        <li className="navlist">
          <ScrollLink smooth className="nav-link" to="skills">
            <div className="nav-icon">
              <SkillsIcon />
            </div>
            <span>Skills</span>
          </ScrollLink>
        </li>
      </ul>

      <div role="button" className="theme-switch" onClick={handleThemeSwitch}>
        <span className="theme-wand">
          <WandIcon />
        </span>
        <span className="theme-wand-text">Do Magic</span>
      </div>
    </nav>
  );
};

export { Navbar };
