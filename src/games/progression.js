import engine from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionGenerator = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const game = () => {
  const start = getRandom(0, 100);
  const step = getRandom(1, 5);
  const hiddenElementPosition = getRandom(0, progressionLength);
  const progression = progressionGenerator(start, step, progressionLength);
  const trueAnswer = progression[hiddenElementPosition];
  const question = progression.map((value, index) => (index === hiddenElementPosition ? '..' : value)).join(' ');
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
