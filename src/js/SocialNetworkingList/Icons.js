import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GitHubLogo } from './svgs/github.svg';
import { ReactComponent as LinkedInLogo } from './svgs/linkedin.svg';
import { ReactComponent as TwitterLogo } from './svgs/twitter.svg';
import '../../scss/landingPage/SocialNetworking.scss';

const LogoIcon = styled.a`
    display: inline-block;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-box-shadow: 0 0 1px transparent;
    box-shadow: 0 0 1px transparent;
`;

const Icon = () => (
  <>
    <LogoIcon href="https://www.linkedin.com/in/saravanan-i-84377354/" target="blank" rel="noreferrer">
      <LinkedInLogo />
    </LogoIcon>
    <LogoIcon href="https://github.com/saravananceg" target="blank" rel="noreferrer">
      <GitHubLogo />
    </LogoIcon>
    <LogoIcon href="https://twitter.com/SaravananCEG" target="blank" rel="noreferrer">
      <TwitterLogo />
    </LogoIcon>
  </>
);

export { Icon };
