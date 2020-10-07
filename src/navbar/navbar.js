import React, {
  useEffect, useState, useRef, useCallback
} from 'react';
import './navbar.scss';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReactComponent as WandIcon } from '../images/magic_wand.svg';
import { ReactComponent as AboutMeIcon } from '../images/navigation/aboutme.svg';
import { ReactComponent as SkillsIcon } from '../images/navigation/tools.svg';
import { ReactComponent as HeartIcon } from '../images/navigation/heart.svg';
import ThemeData from './test';

const PulseDot = styled.div`
    will-change: opacity, transform;
    opacity: 1;
    transform-style: preserve-3d;
`;

const topValue = 119;
const secMap = {
  landing: 20,
  about: 40,
  skills: 60
};

const Navbar = () => {
  const [pulsePos, setPulsePos] = useState();

  const currentTab = useSelector((state) => state.selectedId);

  const navBarItem = useRef(null);

  const [currentTheme, setCurrentTheme] = useState(0);

  let transform = 'scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
  transform = `translate3d(${pulsePos}vw, 0px, 0px)`;

  const handleThemeSwitch = useCallback(() => {
    setCurrentTheme((val) => ((val + 1) % ThemeData.length));
  }, []);

  useEffect(() => {
    const data = ThemeData[currentTheme];
    const { style } = document.documentElement;
    
    style.setProperty('--portfolio-bg-color', data.bg);
    style.setProperty('--portfolio-bg-fade-color', `${data.bg}bf`);
    style.setProperty('--portfolio-font-color', data.font);
    style.setProperty('--portfolio-font-fade-color', `${data.font}40`);
    style.setProperty('--portfolio-icon-color', data.icon);
  }, [currentTheme]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          setPulsePos(secMap[id] + entry.intersectionRatio);
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

    const sticky = navBarItem.current.offsetTop;

    // const onScrollEvent = (ev) => {
    //   if (window.pageYOffset >= sticky) {
    //     navBarItem.current.classList.add('sticky');
    //   } else {
    //     navBarItem.current.classList.remove('sticky');
    //   }

    //   const scrollTop = window.scrollY;
    //   const aa = [];
    //   document.querySelectorAll('section').forEach((a) => {
    //     aa.push(a.offsetHeight);
    //   });
    //   const { scrollHeight } = document.body;
    //   console.log(window.scrollY);
    //   const pos = Math.floor((window.scrollY / scrollHeight) * 100);
    //   setPulsePos(pos);
    // };

    // window.addEventListener('scroll', onScrollEvent);
    return () => {
      // window.removeEventListener('scroll', onScrollEvent);
    };
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
        {/* <li className={`navlist${currentTab === 'skills' ? ' active' : ''}`}>
          <div>
            <SkillsIcon />
          </div>
          <a className="nav-link" href="#skills">Skills</a>
        </li> */}
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
