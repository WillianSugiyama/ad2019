import React, { useState } from 'react';
import Axios from 'axios';

import Modal from '../components/Modal/Modal';
import ModalText from '../components/Modal/ModalText';
import ModalActions from '../components/Modal/ModalActions';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '../components/Buttons/Button';

import color from '../__vars__/colors';

import { Add } from '@styled-icons/ionicons-sharp/Add';
import { Close } from '@styled-icons/evaicons-solid/Close';

const useStyles = makeStyles(() => ({
  root: {
    width: "50%",
  }
}));

const ModalCreate = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

   const addUser = async () => {
    try {
      const response = await Axios.post('http://localhost:3030/api/people', {
        name,
        email,
      });
      const users = [...props.users, response.data.people];

      props.setUsers([...users]);
      props.setState({...props.state, showModalCreate: false});
    } catch (error) {
      console.log(error);
    }
  }

  const handleName = (evt) => {
    setName(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }


  const closeModal = () => {
    props.setState({...props.state, showModalCreate: false});
  }

  const classes = useStyles();

  return (
    <Modal show={props.show}>
        <ModalText>
        <h1> Adicionar integrante: </h1>
        <TextField onChange={handleName} className={classes.root} id="name" label="Nome"  />
        <TextField onChange={handleEmail} className={classes.root} id="email" label="Email"  />
      </ModalText>
      <ModalActions>
        <Button color={color.BLUE} focusColor={color.SECONDARY} fontColor={color.PRIMARY} onClick={() => addUser()}> <Add /> <span> Adicionar Usuário </span> </Button>
        <Button color={color.DANGER_COLOR} focusColor={color.DANGER_COLOR} fontColor={color.PRIMARY} onClick={() => closeModal()}> <Close /> <span> Cancelar</span> </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalCreate;

