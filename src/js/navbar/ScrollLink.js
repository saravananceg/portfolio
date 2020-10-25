import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

const Link = (props) => {
  const {
    children,
    duration = 600,
    spy = true,
    smooth = true,
    offset = -60,
    className,
    to
  } = props;
  return (
    <ScrollLink
      className={className}
      duration={duration}
      spy={spy}
      smooth={smooth}
      to={to}
      offset={offset}
    >
      {children}
    </ScrollLink>
  );
};

export default Link;
