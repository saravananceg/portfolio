import React, { useEffect, useRef } from 'react';
import './PercentageBar.scss';

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// window.addEventListener('load', addClassOnScroll);
// window.addEventListener('scroll', addClassOnScroll);

const PercentBar = (props) => {
  const { children, value } = props;
  const elemRef = useRef();
  useEffect(() => {
    const animate = () => {
      if (isElementInViewport(elemRef.current)) {
        elemRef.current.classList.add('circle-anim');
        document.removeEventListener('scroll', animate);
      }
    };

    window.document.addEventListener('scroll', animate);
  }, []);
  return (
    <div className="single-chart">
      <svg viewBox="0 0 36 36" className="circular-chart orange">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          ref={elemRef}
          strokeDasharray={`${value}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">{children}</text>
      </svg>
    </div>
  );
};

export default PercentBar;
