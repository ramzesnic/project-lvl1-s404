import engine from '..';
import getRandom from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (a === b) return a;
  if (a > b) {
    return nod(a - b, b);
  }
  return nod(a, b - a);
};

const game = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const trueAnswer = nod(num1, num2);
  const question = `${num1} ${num2}`;
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
