import React from 'react';
import styledComponents from 'styled-components';

import colors from '../../__vars__/colors';

const ModalText = styledComponents.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${colors.SECONDARY};
    font-weight: 700;
    margin-bottom: 5%;
  }
`;

const ModalTextComponent = (props) => {
  return (
    <ModalText> { props.children } </ModalText>
  );
}

export default ModalTextComponent;