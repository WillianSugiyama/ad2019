import React,  { useEffect, useState } from 'react';
import styledComponents from 'styled-components';
import Axios from 'axios';

import Card from './components/Card/Card';
import CardTitle from './components/Card/CardTitle';
import CardContent from './components/Card/CartContent';
import CardActions from './components/Card/CardActions';

import Button from './components/Buttons/Button';

import ModalCreate from './pages/ModalCreate';
import ModalEdit from './pages/ModalEdit';
import ModalRemove from './pages/ModalRemove';

import { Trash } from '@styled-icons/boxicons-regular/Trash';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Add } from '@styled-icons/ionicons-sharp/Add';
import { ConfirmationNumber } from '@styled-icons/material/ConfirmationNumber';
import color from './__vars__/colors';

const App = styledComponents.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const AppButtons = styledComponents.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

const AppContent = styledComponents.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

function AppComponent() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    showModalEdit: false,
    showModalCreate: false,
    showModalRemove: false,
    name: '',
    email: '',
  });

  useEffect(() => {
    Axios.get("http://localhost:3030/api/peoples").then((result) => {
      const peoples = result.data.peoples;
      setUsers(peoples);
    }).catch((error) => {console.log(error)})
  }, [setState]);

  const handleModalEdit = (user) => {
    setState({...state, name: user.name, email: user.email, id: user._id, showModalEdit: true});
  };

  const handleModalRemove = (user) => {
    setState({...state, name: user.name, email: user.email, id: user._id, showModalRemove: true});
  }

  const handleDraw = () => {
    Axios.get("http://localhost:3030/api/people/draw").then((response) => {
      if(response.status === 200) {

        alert("Pessoas Sorteadas com sucesso !");
      }
    }).catch((error) => {
      console.log();
      if(error.response) {
        if(error.response.status === 400) {
          alert("Erro ao sortear pessoas, o número de pessoas deve ser par!");
        }
      }
    })
  };

  const handleModalCreate = () => {
    setState({...state, showModalCreate: true});
  }

  return (
    <App>
      <AppButtons>
        <Button color={color.BLUE} focusColor={color.SECONDARY} fontColor={color.PRIMARY} onClick={() => handleDraw()}> <ConfirmationNumber/> <span> Gerar Sorteio </span>  </Button>
        <Button color={color.BLUE} focusColor={color.SECONDARY} fontColor={color.PRIMARY} onClick={() => handleModalCreate()}> <Add/> <span> Criar Usuário </span> </Button>
      </AppButtons>

      <ModalRemove id={state.id} name={state.name} show={state.showModalRemove} setState={setState} state={state} users={users} setUsers={setUsers} />
      <ModalCreate show={state.showModalCreate} setState={setState} state={state} users={users} setUsers={setUsers} />
      <ModalEdit id={state.id} name={state.name} email={state.email} show={state.showModalEdit} setState={setState} state={state} users={users} setUsers={setUsers} />
      <AppContent>
        {users.map((user) => {
        return (
          <Card key={user._id}>
            <CardTitle name={user.name} />
            <CardContent> Email: {user.email} </CardContent>
            <CardActions>
              <Button color={color.BLUE} focusColor={color.SECONDARY} fontColor={color.PRIMARY} onClick={() => handleModalEdit(user)}> <Edit /> <span> Editar </span> </Button>
              <Button color={color.DANGER_COLOR} focusColor={color.DANGER_COLOR} fontColor={color.PRIMARY}  onClick={() => handleModalRemove(user)}> <Trash /> <span> Remover </span> </Button>
            </CardActions>
          </Card>
        )
      })}
      </AppContent>
    </App>
  );
}

export default AppComponent;
