import PeopleSchema from '../schemas/people';
import StatusCode from '../utils/statusCode';
import ResultMessage from '../utils/resultMessage';
import DrawEngine from '../engine/draw.engine';
import EmailEngine from '../engine/email.engine';

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

      EmailEngine(people.sender.email, "Olá, o sorteio do amigo secreto foi realizado", `Você tirou ${people.receiver.name}`);
    });

    return ResultMessage(StatusCode.CREATED, {drawed, message: `Peoples Drawed`});
  } catch(error) {
    return ResultMessage(StatusCode.INTERNAL_SERVER_ERROR, `Error on draw peoples, error: ${error}`);
  }
}

export default drawPeople;