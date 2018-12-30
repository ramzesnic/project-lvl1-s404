import engine from '..';
import getRandom, { isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const question = getRandom(1, 10);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
