import React from 'react';
import Axios from 'axios';

import Modal from '../components/Modal/Modal';
import ModalText from '../components/Modal/ModalText';
import ModalActions from '../components/Modal/ModalActions';

import Button from '../components/Buttons/Button';

import color from '../__vars__/colors';

import { Done } from '@styled-icons/material/Done';
import { Close } from '@styled-icons/evaicons-solid/Close';

const ModalCreate = (props) => {
   const removeUser = async () => {
    try {
      await Axios.delete(`http://localhost:3030/api/people?id=${props.id}`);

      const users = props.users.filter((user) => user._id !== props.id);

      props.setUsers([...users]);
      props.setState({...props.state, showModalRemove: false});
    } catch (error) {
      console.log(error);
    }
  }

  const closeModal = () => {
    props.setState({...props.state, showModalRemove: false});
  }

  return (
    <Modal show={props.show}>
        <ModalText>
        <h1> Deseja mesmo remover o User: {props.name} </h1>
      </ModalText>
      <ModalActions>
        <Button color={color.BLUE} focusColor={color.SECONDARY} fontColor={color.PRIMARY} onClick={() => removeUser()}> <Done /> <span> Confirmar </span> </Button>
        <Button color={color.DANGER_COLOR} focusColor={color.DANGER_COLOR} fontColor={color.PRIMARY} onClick={() => closeModal()}> <Close /> <span> Cancelar</span> </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalCreate;

