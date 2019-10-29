import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
  display: flex;
  margin-top: ${props => (props.mobile ? '-6rem' : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  align-items: center;
  height: 100%;
`;

const NavItems = () => {
    return (
        <Nav>
            <Ul>
                <NavItem link="/">home</NavItem>
                <NavItem link="todos">Todos</NavItem>
            </Ul>
        </Nav>
    );
};
export default NavItems;