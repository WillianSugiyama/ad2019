import React from "react";
import styledComponents from 'styled-components';
import colors from '../../__vars__/colors';

const CardAction = styledComponents.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 10px;

  color: ${colors.TERTIARY};
`;

const CardActionComponent = (props) => {
  return (
    <CardAction> { props.children } </CardAction>
  );
}

export default CardActionComponent;