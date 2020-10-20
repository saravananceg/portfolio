import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NextPageIcon } from './svgs/nextpage.svg';
import '../../scss/Components/NextPage.scss';

const Wrapper = styled.div`
  webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
`;

const NextPage = () => (
  <Wrapper>
    <NextPageIcon />
  </Wrapper>
);

export default NextPage;
