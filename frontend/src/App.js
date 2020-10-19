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

import color from './__vars__/colors';

const App = styledComponents.div`
  width: 100%;
  min-height: 500px;
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

  return (
    <App>
      <ModalRemove id={state.id} name={state.name} show={state.showModalRemove} setState={setState} state={state} users={users} setUsers={setUsers} />
      <ModalCreate show={state.showModalCreate} setState={setState} state={state} users={users} setUsers={setUsers} />
      <ModalEdit id={state.id} name={state.name} email={state.email} show={state.showModalEdit} setState={setState} state={state} users={users} setUsers={setUsers} />
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
    </App>
  );
}

export default AppComponent;
