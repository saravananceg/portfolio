import React from 'react';
import { ReactComponent as NextPageIcon } from './svgs/nextpage.svg';
import './css/nextpage.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
`;

const NextPage = () => (
  <Wrapper>
    <NextPageIcon />
  </Wrapper>
);

export { NextPage };
