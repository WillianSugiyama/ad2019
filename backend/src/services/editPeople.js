import PeopleSchema from '../schemas/people';
import StatusCode from '../utils/statusCode';
import ResultMessage from '../utils/resultMessage';

const editPeople = async (id, peopleBody) => {
  const people = await PeopleSchema.findById(id);

  const data = {...peopleBody, ...people};

  if(!people) {
    return ResultMessage(StatusCode.NOT_FOUND, `People not found`);
  }

  try {
    const peopleSaved = await PeopleSchema.findOneAndUpdate({_id: id}, { ...data });

    return ResultMessage(StatusCode.OK, {people: peopleSaved, message: `People has been updated`});
  } catch (error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on update people, error: ${error}`);
  }
}

export default editPeople;