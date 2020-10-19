import PeopleSchema from '../schemas/people';
import StatusCode from '../utils/statusCode';
import ResultMessage from '../utils/resultMessage';

const listPeople = async (id) => {
  try {
    const people = await PeopleSchema.findById(id);

    if(!people) {
      return ResultMessage(StatusCode.NOT_FOUND, `People not found`);
    }

    return ResultMessage(StatusCode.OK, {people: people, message: `People listed`});
  } catch(error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on list people, error: ${error}`);
  }
}

const listPeoples = async () => {
  try {
    const peoples = await PeopleSchema.find();

    if(!peoples) {
      return ResultMessage(StatusCode.NOT_FOUND, `People not found`);
    }

    return ResultMessage(StatusCode.OK, {peoples: peoples, message: `Peoples listed`});
  } catch(error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on list peoples, error: ${error}`);
  }
}

export {listPeople, listPeoples};