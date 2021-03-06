import React from 'react';
import '../../scss/aboutme/base.scss';
import Lottie from 'react-lottie';
import animationData from '../../lottie-json/working-room.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const AboutMe = () => (
  <section id="about" className="container-md section about-me">
    <div className="about-content-container">
      <h1 className="title">About Me</h1>
      <div className="about-me-desc-wrapper">
        <div className="about-me-desc">
          {/* <img src={profile} alt="Profile Saravanan" /> */}
          <p>
            Passionate Front end web developer with my major interests being Javascript and ReactJS
          </p>
          <p>
            {'I like building web applications and making it accessible for all types of people. '
                          + 'Have passion building useful applications which will benefit large scale users.'}
          </p>
          <p>
            I always find the adneraline, whenever there is a need to find a solution for problem
          </p>
          <p>
            Keen Interest in DS / algorithms and practical knowledge of applying them in products.
          </p>
          <p>
            Will prefer
            {' '}
            <b className="highlight">Quality over Quantity of work</b>
            {' '}
            anytime.
          </p>
        </div>
        <div className="about-me-anim">
          <Lottie
            options={defaultOptions}
            width="100%"
          />
        </div>
      </div>
    </div>
    <div className="intro-footer">
      <div className="icon-scroll" />
    </div>
  </section>
);

export default AboutMe;
