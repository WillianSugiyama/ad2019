import React from "react";
import styledComponents from 'styled-components';
import colors from '../../__vars__/colors';

const CardContent = styledComponents.div`
  width: 100%;
  height: 50%;
  text-align: center;

  color: ${colors.TERTIARY};
`;

const CardContentComponent = (props) => {
  return (
    <CardContent> { props.children } </CardContent>
  );
}

export default CardContentComponent;