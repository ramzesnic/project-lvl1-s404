import engine, { getRandom } from '..';

const description = 'What is the result of the expression?';
const operations = [
  {
    operation: '+',
    func: (a, b) => a + b,
  },
  {
    operation: '-',
    func: (a, b) => a - b,
  },
  {
    operation: '*',
    func: (a, b) => a * b,
  },
];

const game = () => {
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const operation = operations[getRandom(0, 3)];
  const question = `${a} ${operation.operation} ${b}`;
  const trueAnswer = operation.func(a, b);
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
