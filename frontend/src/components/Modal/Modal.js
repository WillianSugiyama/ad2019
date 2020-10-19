import React from 'react';
import styledComponents from 'styled-components';

const Modal = styledComponents.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.show ? "flex" : "none"};

  align-items: center;
  justify-content: center;
`;

const ModalContent = styledComponents.div`
  width: 50%;
  height: 50%;
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  @media(min-width: 767) {
    width: 75%;
    height: 75%;
  }
 `;

const ModalComponent = (props) => {
  return (
    <Modal show={ props.show }>
      <ModalContent> { props.children } </ModalContent>
    </Modal>
  );
}

export default ModalComponent;