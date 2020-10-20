import React from 'react';
import { Navbar } from '../navbar/navbar';
import { Icon } from '../SocialNetworkingList/Icons';
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
    <section id="landing" className="container-md section landing">
      <Navbar />
      <div className="buildinfo">
        <span>
          This app is built with React, Redux, SCSS and a tinch of imagination
        </span>
      </div>

      <div className="intro-container">
        <div className="intro-section">
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
          <div>
            {/* <Lottie
              options={defaultOptions}
                height={400}
                width={400}
      /> */}
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
