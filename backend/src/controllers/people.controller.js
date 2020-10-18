import CreatePeople from "../services/createPeople";
import EditPeople from "../services/editPeople";
import { listPeople, listPeoples } from "../services/listPeople";
import RemovePeople from "../services/removePeople";
import StatusCode from "../utils/statusCode";
import DrawPeople from "../services/drawPeoples";

const createPeopleController = async (req, res) => {
  const {name, email} = req.body;

  if(!name || !email) {
    res.status(StatusCode.BAD_REQUEST).send(`Bad Parameters`);
  }

  const peopleCreated = await CreatePeople({name, email});

  res.status(peopleCreated.statusCode).send(peopleCreated.message);
};

const editPeopleController = async (req, res) => {
  if(Object.keys(req.body).length <= 0) {
    res.status(StatusCode.BAD_REQUEST).send(`Bad Parameters`);
  }

  const peopleUpdated = await EditPeople(req.query.id, req.body);

  res.status(peopleUpdated.statusCode).send(peopleUpdated.message);
};

const listOneController = async (req, res) => {
  if(!req.query.id) {
    res.status(StatusCode.BAD_REQUEST).send(`Bad Parameters`);
  } else {
    const people = await listPeople(req.query.id);

    res.status(people.statusCode).send(people.message);
  }
};

const listAllController = async (req, res) => {
  const peoples = await listPeoples();

  res.status(peoples.statusCode).send(peoples.message);
};

const removeController = async (req, res) => {
  if(!req.query.id) {
    res.status(StatusCode.BAD_REQUEST).send(`Bad Parameters`);
  }

  const removed = await RemovePeople(req.query.id);

  res.status(removed.statusCode).send(removed.message);
};

const drawPeoplesController = async (req, res) => {
   const drawed = await DrawPeople();

   res.status(drawed.statusCode).send(drawed);
};

export {
  createPeopleController,
  editPeopleController,
  listOneController,
  listAllController,
  removeController,
  drawPeoplesController
};