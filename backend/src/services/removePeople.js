import PeopleSchema from '../schemas/people';
import StatusCode from '../utils/statusCode';
import ResultMessage from '../utils/resultMessage';

const removePeople = async (id) => {
  const people = await PeopleSchema.findById(id);

  if(!people) {
    return ResultMessage(StatusCode.NOT_FOUND, `People not found`);
  }

  try {
    await PeopleSchema.findByIdAndDelete({_id: id});

    return ResultMessage(StatusCode.OK, `People has been deleted`);
  } catch (error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on deleted people, error: ${error}`);
  }
}

export default removePeople;