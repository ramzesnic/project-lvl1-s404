import engine from '..';
import getRandom, { nod } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const trueAnswer = nod(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
