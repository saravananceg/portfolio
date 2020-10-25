import React from 'react';

import { Navbar } from '../navbar/navbar';
import { Icon } from '../SocialNetworkingList/Icons';
import { ReactComponent as Coder } from '../../images/characters/coder.svg';
import TypeWriteComponent from '../Components/TypeWriterComponent';
import '../../scss/landingPage/landingPage.scss';


const data = [
  "(() => 'awesome js')()",
  "import React from 'react';",
  '<AwesomeComponent {...props} />',
  'useReducer(state, payload)',
  '.span > i { color: var(--awesome) }',
  "test('Jest sample case')"
];

const LandingPage = () => (
  <>
    <section id="home" className="container-md section landing">
      <Navbar />
      <div className="buildinfo">
        <span>
          This app is built with React, Redux, SCSS and a tinch of imagination
        </span>
      </div>

      <div className="intro-container">
        <div className="intro-section">
          {/* <div>
            <Coder width="300" height="200" />
          </div> */}
          <div className="intro-name">Hello, I&apos;m Saravanan!</div>
          <div className="intro-tags">
            Web Developer
            {' '}
            <span className="separator">|</span>
            {' '}
            React JS
            {' '}
            <span className="separator">|</span>
            {' '}
            Javascript
          </div>
          <div className="intro-works"><TypeWriteComponent data={data} /></div>
          <div className="social-media-container">
            <Icon />
          </div>
        </div>
      </div>
      <div className="intro-footer">
        <div className="icon-scroll" />
      </div>
    </section>
  </>
);

export default LandingPage;
