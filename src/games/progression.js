import engine from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const questionGenerator = (progression, index, step) => {
  for (let i = index; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const game = () => {
  const start = getRandom(0, 100);
  const step = getRandom(1, 5);
  const hiddenElementPosition = getRandom(0, progressionLength);
  const questionInit = questionGenerator([start], 1, step);
  const trueAnswer = questionInit[hiddenElementPosition];
  const question = questionInit.map((value, index) => (index === hiddenElementPosition ? '..' : value)).join(' ');
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
