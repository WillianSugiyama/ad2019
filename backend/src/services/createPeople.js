import PeopleSchema from '../schemas/people';
import StatusCode from '../utils/statusCode';
import ResultMessage from '../utils/resultMessage';

const createPeople = async (peopleBody) => {
  const {name, email} = peopleBody;

  const people = new PeopleSchema({name, email});

  try {
    const peopleSaved = await people.save();

    return ResultMessage(StatusCode.CREATED, {people: peopleSaved, message: `People has been created`});
  } catch (error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on create people, error: ${error}`);
  }
}

export default createPeople;