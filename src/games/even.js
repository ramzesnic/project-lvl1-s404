import engine from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = question => question % 2 === 0;

const game = () => {
  const question = getRandom(1, 10);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
