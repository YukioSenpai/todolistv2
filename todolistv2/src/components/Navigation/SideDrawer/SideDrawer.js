
import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavItems from '../../NavItems/NavItems';
import Hamburger from '../SideDrawer/Hamburger/Hamburger';

const FixedWrapper = styled.header`
  position: fixed;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;
  @media ${props => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;



const SideDrawer = () => {
    const [isOpened, setisOpened] = useState(false);

    return (
        <FixedWrapper>
            <Wrapper>
            <Logo />
            <Hamburger opened={isOpened} clicked={() => setisOpened(!isOpened)}/>
            </Wrapper>
        </FixedWrapper>
    );
};

export default SideDrawer;