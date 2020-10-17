import PeopleSchema from '../schemas/people';
import StatusCode from '../utils/statusCode';
import ResultMessage from '../utils/resultMessage';
import DrawEngine from '../engine/draw.engine';

const drawPeople = async () => {
  try {
    const peoples = await PeopleSchema.find();

    if(!peoples) {
      return ResultMessage(StatusCode.NOT_FOUND, `People not found`);
    }

    const drawed = await DrawEngine(peoples);

    if(!drawed) {
      return ResultMessage(StatusCode.CREATED, `Draw not working, it's odd`);
    }

    drawed.forEach((people) => {
      PeopleSchema.findByIdAndUpdate({ _id: people.sender._id }, { friend: people.receiver.name }).exec();
    });

    return ResultMessage(StatusCode.CREATED, {drawed, message: `People has been created`});
  } catch(error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on list people, error: ${error}`);
  }
}

export default drawPeople;