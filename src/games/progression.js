import engine from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const questionGenerator = (progression, index, step) => {
  if (index === lengthProgression) return progression;
  progression.push(progression[index - 1] + step);
  return questionGenerator(progression, index + 1, step);
};

const game = () => {
  const start = getRandom(0, 100);
  const step = getRandom(1, 5);
  const randomIndex = getRandom(0, 10);
  const questionInit = questionGenerator([start], 1, step);
  const trueAnswer = questionInit[randomIndex];
  const question = questionInit.map((value, index) => (index === randomIndex ? '..' : value)).join(' ');
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
