import React from 'react';
import styledComponents from 'styled-components';

const Button = styledComponents.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 14px;
  font-weight: 700;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 25px;
  }

  span {
    margin-left: 10px;
  }

  &:focus {
    text-decoration: none;
    border-color: ${props => props.focusColor};
    color: ${props => props.fontColor};
    background-color: ${props => props.focusColor};
  }
`;

const ButtonComponent = (props) => {
  return (
    <Button onClick={props.onClick} color={props.color} focusColor={props.focusColor} fontColor={props.fontColor}> { props.children } </Button>
  )
}

export default ButtonComponent;