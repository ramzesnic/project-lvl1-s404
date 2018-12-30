import engine from '..';
import getRandom, { isPrime } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const question = getRandom(0, 21);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
