import engine from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) return true;
  if (num % 2 === 0 || num === 1) return false;
  const iter = (i) => {
    if (i > Math.sqrt(num)) return true;
    if (num % i === 0) return false;
    return iter(i + 2);
  };
  return iter(3);
};

const game = () => {
  const question = getRandom(0, 21);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
