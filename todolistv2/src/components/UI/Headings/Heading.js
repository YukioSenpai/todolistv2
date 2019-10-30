import React from 'react';
import styled, {css} from 'styled-components';

const baseStyle = css`
  color: ${({ color }) =>
  color === 'white' ? 'var(--color-white)' : 'var(--color-main)'};
  font-weight: 300;
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0rem' : '3rem')};
`;

const Headingh1 = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  ${baseStyle}
`;

const Headingh2 = styled.h2`
  font-size: 1.8rem;
  ${baseStyle}
`;

const Headingh3 = styled.h3`
  font-size: 1.5rem;
  ${baseStyle}
`;

const Headingh4 = styled.h4`
  font-size: 1.3rem;
  ${baseStyle}
`;

const Heading = ({children, color, noMargin, bold, size}) => {
    if (size === 'h1')
    return (
      <Headingh1 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Headingh1>
    );

  if (size === 'h2')
    return (
      <Headingh2 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Headingh2>
    );

  if (size === 'h3')
    return (
      <Headingh3 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Headingh3>
    );

  if (size === 'h4')
    return (
      <Headingh4 noMargin={noMargin} bold={bold} color={color}>
        {children}
      </Headingh4>
    );
};

export default Heading;