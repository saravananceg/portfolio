import React from 'react';

import './skills.scss';
import PercentBar from './PercentageBar';
import { ReactComponent as JSIcon } from '../images/html_code.svg';
import { ReactComponent as BugIcon } from '../images/bug.svg';
import { ReactComponent as FrontEndIcon } from '../images/monitor.svg';
import { ReactComponent as BackEndIcon } from '../images/backend.svg';

const Title = ({ children }) => (<h5 className="skills-list-header">{children}</h5>);

const Content = ({ children }) => (<div className="skills-list-body">{children}</div>);

const IconSection = ({ children }) => (
  <div className="skill-section-icon">
    {children}
  </div>
);

const ContentSection = ({ children }) => (
  <div>
    {children}
  </div>
);

const Skill = ({ children }) => (
  <div className="skill-section">
    {children}
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="container-md section skills">
    <div className="skills-container">
      <h1 className="title">Skills</h1>
      <div>
        <div className="skills-section-container">
          <Skill>
            <IconSection>
              <JSIcon />
            </IconSection>
            <ContentSection>
              <Title>Javascript</Title>
              <Content>
                <div>ES6</div>
                <div>ReactJS</div>
                <div>Redux</div>
                <div>BackboneJS</div>
                <div>Jquery</div>
              </Content>
            </ContentSection>
          </Skill>
          <Skill>
            <IconSection>
              <FrontEndIcon />
            </IconSection>
            <ContentSection>
              <Title>Front-End</Title>
              <Content>
                <div>HTML5</div>
                <div>CSS</div>
                <div>SCSS</div>
              </Content>
            </ContentSection>
          </Skill>
          <Skill>
            <IconSection>
              <BugIcon />
            </IconSection>
            <ContentSection>
              <Title>Testing</Title>
              <Content>
                <div>Unit Testing</div>
                <div>Jest</div>
                <div>@testing-library/react</div>
              </Content>
            </ContentSection>
          </Skill>
          <Skill>
            <IconSection>
              <JSIcon />
            </IconSection>
            <ContentSection>
              <Title>Build Tools</Title>
              <Content>
                <div>Webpack</div>
                <div>Gulp / Grunt</div>
                <div>Babel</div>
                <div>Eslint</div>
                <div>Lerna</div>
              </Content>
            </ContentSection>
          </Skill>
          <Skill>
            <IconSection>
              <JSIcon />
            </IconSection>
            <ContentSection>
              <Title>Setups</Title>
              <Content>
                <div>Git</div>
                <div>CI/CD</div>
                <div>npm registry</div>
              </Content>
            </ContentSection>
          </Skill>
          <Skill>
            <IconSection>
              <BackEndIcon />
            </IconSection>
            <ContentSection>
              <Title>BackEnd</Title>
              <Content>
                <div>Java</div>
                <div>Struts2</div>
              </Content>
            </ContentSection>
          </Skill>
        </div>
        <div className="language-bar">
          <div className="language-wrapper">
            <PercentBar value="90">En</PercentBar>
            <div className="language-desc">
              <h5 className="language-title">English</h5>
              <div>
                <span className="language-desc-sep" />
              </div>
              <div className="language-fluency">
                <span>Fluent</span>
              </div>
            </div>

          </div>
          <div className="language-wrapper">
            <PercentBar value="100">Ta</PercentBar>
            <div className="language-desc">
              <h5 className="language-title">Tamil</h5>
              <div>
                <span className="language-desc-sep" />
              </div>
              <div className="language-fluency">
                <span>Native</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="intro-footer">
        <div className="icon-scroll" />
      </div> */}
    </div>
  </section>
);

export { SkillsSection as Skills };
