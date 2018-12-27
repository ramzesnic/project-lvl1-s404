import engine, { getRandom } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = question => question % 2 === 0;
const game = () => {
  const question = getRandom(1, 10);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
