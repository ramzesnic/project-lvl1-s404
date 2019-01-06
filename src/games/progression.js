import engine from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const game = () => {
  const start = getRandom(0, 100);
  const step = getRandom(1, 5);
  const hiddenElementPosition = getRandom(0, progressionLength);
  const progression = Array(...new Array(progressionLength)).map(
    (value, index) => start + step * index,
  );
  const trueAnswer = progression[hiddenElementPosition].toString();
  const question = progression.map((value, index) => (index === hiddenElementPosition ? '..' : value)).join(' ');
  return {
    question,
    trueAnswer,
  };
};

export default () => engine(game, description);
