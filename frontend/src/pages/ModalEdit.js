import React from 'react';
import Axios from 'axios';

import Modal from '../components/Modal/Modal';
import ModalText from '../components/Modal/ModalText';
import ModalActions from '../components/Modal/ModalActions';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '../components/Buttons/Button';

import color from '../__vars__/colors';

import { Close } from '@styled-icons/evaicons-solid/Close';
import { EditAlt} from '@styled-icons/boxicons-regular/EditAlt';

const useStyles = makeStyles(() => ({
  root: {
    width: "50%",
  }
}));

const ModalCreate = (props) => {
   const editUser = async () => {
    try {
      const response = await Axios.put(`http://localhost:3030/api/people?id=${props.id}`, {
        name: props.name,
        email: props.email,
      });

      const usersListWithUserRemoved = props.users.filter((user) => user._id !== props.id);
      const usersEdited = [response.data.people , ...usersListWithUserRemoved];

      props.setUsers([...usersEdited]);
      props.setState({...props.state, showModalEdit: false});
    } catch (error) {
      console.log(error);
    }
  }

  const handleName = (evt) => {
    props.setState({...props.state, name: evt.target.value});
  }

  const handleEmail = (evt) => {
    props.setState({...props.state, email: evt.target.value});
  }


  const closeModal = () => {
    props.setState({...props.state, showModalEdit: false});
  }

  const classes = useStyles();

  return (
    <Modal show={props.show}>
        <ModalText>
        <h1> Editar integrante: </h1>
        <TextField value={props.name || ''} onChange={handleName} className={classes.root} id="name" label="Nome"  />
        <TextField value={props.email || ''} onChange={handleEmail} className={classes.root} id="email" label="Email"  />
      </ModalText>
      <ModalActions>
        <Button color={color.BLUE} focusColor={color.SECONDARY} fontColor={color.PRIMARY} onClick={() => editUser()}> <EditAlt /> <span> Editar Usuário </span> </Button>
        <Button color={color.DANGER_COLOR} focusColor={color.DANGER_COLOR} fontColor={color.PRIMARY} onClick={() => closeModal()}> <Close /> <span> Cancelar </span> </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalCreate;

