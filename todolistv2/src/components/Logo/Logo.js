import React from 'react';
import styled from 'styled-components';
import logo from './zelda.png'

const LogoWrapper = styled.div`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1rem;
`;

const Logo = () => {
  return <LogoWrapper><img src={logo} alt="Todoistv2" width="64px"/></LogoWrapper>;
};

export default Logo;