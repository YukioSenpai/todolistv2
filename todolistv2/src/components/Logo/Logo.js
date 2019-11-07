import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import gif from './giphy.gif';

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

  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return <LogoWrapper>
            <img src={gif} width="64px" alt="gif" onClick={handleClick} />
         </LogoWrapper>;
};

export default Logo;
