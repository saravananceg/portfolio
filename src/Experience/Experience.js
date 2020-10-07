import React, {
  useCallback, useState, createContext, useContext, Children, cloneElement, useEffect, useRef
} from 'react';
import './experience.scss';
import { ReactComponent as OfflineLogo } from '../images/offline_logo.svg';
import { ReactComponent as NotificationLogo } from '../images/notification.svg';
import { ReactComponent as ComponentsLogo } from '../images/uicomponents.svg';
import { ReactComponent as I18nLogo } from '../images/text.svg';
import { ReactComponent as LightningLogo } from '../images/lightning.svg';
import WORKS_DATA from './WorksData';

const PortfolioContext = createContext();

const FrontSection = (props) => {
  const {
    children,
    nodeId
  } = props;

  const {
    isSelected
  } = useContext(PortfolioContext);
  const className = 'portfolio-work-inner-front';

  if (isSelected(nodeId)) {
    // className += ' expand-card';
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
};

const BackSection = (props) => {
  const { children, nodeId } = props;
  const {
    isSelected,
    setExpanded,
    isOtherCardSelected
  } = useContext(PortfolioContext);

  let className = 'portfolio-work-inner-back';
  if (isSelected(nodeId)) {
    // className += ' expand-card';
  } else if (isOtherCardSelected()) {
    className += ' opa';
  }
  return (
    <div className={className}>
      {children}
      <div className="details-card-footer">
        Click to zoom out
      </div>
    </div>
  );
};

const WorkDetails = ({ children }) => (
  <div className="portfolio-work-details">{children}</div>
);

const WorkDetailsTitle = ({ children }) => (
  <div className="portfolio-work-details-title">{children}</div>
);

const Title = ({ children }) => (
  <div className="portfolio-work-title">{children}</div>
);

const Desc = ({ children }) => (
  <div className="portfolio-work-desc">{children}</div>
);

const WorksLogo = ({ children }) => (
  <div className="portfolio-logo">
    {children}
  </div>
);

const WorkItem = (props) => {
  const { children, nodeId } = props;
  const {
    isSelected,
    setExpanded,
    isOtherCardSelected
  } = useContext(PortfolioContext);

  const wrapperRef = useRef(null);

  const toggleExpandState = useCallback(() => {
    if (isSelected(nodeId)) {
      setExpanded(null);
    } else {
      setExpanded(nodeId);
    }
  }, [isSelected, nodeId, setExpanded]);

  const selected = isSelected(nodeId);
  useEffect(() => {
    let timeout;
    const clickAway = (ev) => {
      if (!(ev.composedPath().indexOf(wrapperRef.current) > -1)) {
        setExpanded(null);
      }
    };

    if (selected) {
      wrapperRef.current.classList.remove('portfolio-work-stable');
      document.addEventListener('click', clickAway);
    } else {
      timeout = setTimeout(() => {
        wrapperRef.current.classList.add('portfolio-work-stable');
      }, 300);
    }
    return () => {
      clearTimeout(timeout);
      if (selected) {
        document.removeEventListener('click', clickAway);
      }
    };
  }, [selected, setExpanded]);

  let className = 'portfolio-work';
  let innerClassName = 'portfolio-work-inner';
  if (isSelected(nodeId)) {
    className += ' expand-card-wrapper';
    innerClassName += ' expand-card';
  } else if (isOtherCardSelected()) {
    className += ' opa';
  }

  return (
    <div onClick={toggleExpandState} className={className} ref={wrapperRef}>
      <div className={innerClassName}>
        {
        Children.map(children, (child) => cloneElement(child, { nodeId }))
        }
      </div>
    </div>
  );
};

const Works = () => {
  const [currentExpanded, setCurrentExpanded] = useState(null);

  const isSelected = (id) => currentExpanded === id;

  const isOtherCardSelected = () => {
    if (currentExpanded) {
      return true;
    }
    return false;
  };

  const setExpanded = (id) => {
    setCurrentExpanded(id);
  };

  return (
    <section id="works" className="container-md section works">
      <PortfolioContext.Provider value={{
        isSelected,
        setExpanded,
        isOtherCardSelected
      }}
      >
        <div className="works-container">
          <h1 className="title">Works</h1>
          <div className="portfolio-container">
            <WorkItem nodeId="offline">
              <FrontSection>
                <Title>Offline Mail</Title>
                <WorksLogo>
                  <OfflineLogo />
                </WorksLogo>
                <Desc>Making Zoho Mail accessible even when internet is off</Desc>
              </FrontSection>
              <BackSection>
                <WorkDetailsTitle>Offline Mail</WorkDetailsTitle>
                <WorkDetails>
                  {WORKS_DATA.offline.map((val) => (<div>{val}</div>))}
                </WorkDetails>
              </BackSection>
            </WorkItem>
            <WorkItem nodeId="notification">
              <FrontSection>
                <Title>Notification System</Title>
                <WorksLogo>
                  <NotificationLogo />
                </WorksLogo>
                <Desc>New Mails, Activites live sync</Desc>
              </FrontSection>
              <BackSection>
                <WorkDetailsTitle>Notification System</WorkDetailsTitle>
                <WorkDetails>
                  {WORKS_DATA.notification.map((val) => (<div>{val}</div>))}
                </WorkDetails>
              </BackSection>
            </WorkItem>
            <WorkItem nodeId="uicomp">
              <FrontSection>
                <Title>Accessible UI Components</Title>
                <WorksLogo>
                  <ComponentsLogo />
                </WorksLogo>
                <Desc>Accessible React Components with proper unit testing</Desc>
              </FrontSection>
              <BackSection>
                <WorkDetailsTitle>Accessible UI Components</WorkDetailsTitle>
                <WorkDetails>
                  {WORKS_DATA.uicomponents.map((val) => (<div>{val}</div>))}
                </WorkDetails>
              </BackSection>
            </WorkItem>
            <WorkItem nodeId="i18n">
              <FrontSection>
                <Title>I18N System</Title>
                <WorksLogo>
                  <I18nLogo />
                </WorksLogo>
                <Desc>Internalization system with the help of webpack and babel plugins</Desc>
              </FrontSection>
              <BackSection>
                <WorkDetailsTitle>I18N System</WorkDetailsTitle>
                <WorkDetails>
                  {WORKS_DATA.i18nsystem.map((val) => (<div>{val}</div>))}
                </WorkDetails>
              </BackSection>
            </WorkItem>
            <WorkItem nodeId="uxperf">
              <FrontSection>
                <Title>UX Performance</Title>
                <WorksLogo>
                  <LightningLogo />
                </WorksLogo>
                <Desc>Improved UX Performance adopting best practices</Desc>
              </FrontSection>
              <BackSection>
                <WorkDetailsTitle>Performance</WorkDetailsTitle>
                <WorkDetails>
                  {WORKS_DATA.performance.map((val) => (<div>{val}</div>))}
                </WorkDetails>
              </BackSection>
            </WorkItem>
          </div>
        </div>
        {/* <div className="intro-footer">
          <div className="icon-scroll" />
        </div> */}
      </PortfolioContext.Provider>
    </section>
  );
};

export { Works };
