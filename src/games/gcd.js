import engine, { getRandom } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  const iter = (a, b) => {
    if (a === b) return a;
    if (a > b) {
      return iter(a - b, b);
    }
    return iter(a, b - a);
  };
  const trueAnswer = iter(num1, num2);
  const question = `${num1} ${num2}`;
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
