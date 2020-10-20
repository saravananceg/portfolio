import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../scss/skills/PercentageBar.scss';

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const PercentBar = (props) => {
  const { children, value } = props;
  const elemRef = useRef();

  /* This by default doesn't fill the bar until this elements comes into view
  Once this comes into view, you can add animatation using circle-anim class */
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

PercentBar.propTypes = {
  /*
    Text to be displayed in the center of the percentage bar
  */
  children: PropTypes.node.isRequired,

  /*
    % completed value
  */
  value: PropTypes.number.isRequired
};

export default PercentBar;
