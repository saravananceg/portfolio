import React from 'react';
import Lottie from 'react-lottie';
import { Navbar } from '../navbar/navbar';
import lottieData from '../lottie-json/hello-boy.json';
import { Icon } from '../SocialNetworkingList/Icons';
import TypeWriteComponent from '../Components/TypeWriterComponent';
import { NextPage } from '../Components/NextPageIcon';
import ReactLogo from '../react.gif';
import './landingPage.scss';

const data = [
  "(() => 'awesome js')()",
  "import React from 'react';",
  '<AwesomeComponent {...props} />',
  'useReducer(state, payload)',
  '.span > i { color: var(--awesome) }',
  "test('Jest sample case')"
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottieData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

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
        {/* <NextPage /> */}
      </div>
    </section>
  </>
);

export { LandingPage };
