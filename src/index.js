import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = question => question % 2 === 0;

export const brainEven = () => {
  const countRaund = 3;
  const min = 1;
  const max = 100;
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = getName();
  console.log(`Hello, ${name}!\n`);

  const iter = (count) => {
    if (count === 0) return `Congratulations, ${name}!`;
    const question = getRandom(min, max);
    const trueAnswer = isEven(question) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== trueAnswer) {
      const message = `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}.\n Let's try again, ${name}!'`;
      return message;
    }
    console.log('Correct!');
    return iter(count - 1);
  };
  return console.log(iter(countRaund));
};

export default getName;
