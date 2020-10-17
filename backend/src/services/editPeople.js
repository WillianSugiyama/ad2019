import PeopleSchema from '../schemas/people';
import StatusCode from '../utils/statusCode';
import ResultMessage from '../utils/resultMessage';

const editPeople = async (id, peopleBody) => {
  const people = await PeopleSchema.findById(id);

  const data = { ...people._doc, ...peopleBody };

  if(!people) {
    return ResultMessage(StatusCode.NOT_FOUND, `People not found`);
  }

  try {
    await PeopleSchema.findOneAndUpdate({_id: id}, { ...data });

    const peopleUpdated = await PeopleSchema.findById({_id: id});

    return ResultMessage(StatusCode.OK, {people: peopleUpdated, message: `People has been updated`});
  } catch (error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on update people, error: ${error}`);
  }
}

export default editPeople;