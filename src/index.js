import readlineSync from 'readline-sync';

export default () => readlineSync.question('May I have your name? ');

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = (count, min, max, name) => {
  if (count === 0) return `Congratulations, ${name}!`;
  const randomNum = getRandom(min, max);
  const trueAnswer = randomNum % 2 ? 'no' : 'yes';
  const answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
  if (answer !== trueAnswer) {
    const message = `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}.\n Let's try again, ${name}!'`;
    return message;
  }
  console.log('Correct!');
  return isEven(count - 1, min, max, name);
};
