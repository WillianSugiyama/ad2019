import React from 'react';
import styledComponents from 'styled-components';
import colors from '../../__vars__/colors';

const Header = styledComponents.header`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.SECONDARY};

  h1 {
    font-weight: 700;
  }
`;

const HeaderComponent = (props) => {
  return (
    <Header>
      <h1> {props.title } </h1>
    </Header>
  );
};

export default HeaderComponent;