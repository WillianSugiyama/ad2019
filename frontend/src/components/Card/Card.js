import React from "react";
import styledComponents from 'styled-components';
import colors from '../../__vars__/colors';

const Card = styledComponents.div`
  min-width: 350px;
  width: 15%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.PRIMARY};
  color: ${colors.SECONDARY};
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const CardComponent = (props) => {
  return (
    <Card>
      {props.children}
    </Card>
  );
}

export default CardComponent;