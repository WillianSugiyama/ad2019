import React from "react";
import styledComponents from 'styled-components';
import colors from '../../__vars__/colors';

const CardTitle = styledComponents.div`
  width: 100%;
  height: 30%;
  text-align: center;

  h1 {
    font-size: 30px;
    font-weight: 500;
    color: ${colors.SECONDARY};
  }
`;

const CardTitleComponent = (props) => {
  return (
    <CardTitle>
      <h1> { props.name } </h1>
    </CardTitle>
  );
}

export default CardTitleComponent;