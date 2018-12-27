import readlineSync from 'readline-sync';

const countRaund = 3;
const min = 1;
const max = 100;
const title = '\nWelcome to the Brain Games!';
const description = 'Answer "yes" if number even otherwise answer "no".';

const getName = () => readlineSync.question('\nMay I have your name? ');

const getRandom = () => Math.floor(Math.random() * (max - min)) + min;

const isEven = question => question % 2 === 0;

export const brainEven = () => {
  console.log(title);
  console.log(description);
  const name = getName();
  console.log(`Hello, ${name}!\n`);

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const question = getRandom();
    const trueAnswer = isEven(question) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== trueAnswer) {
      const message = `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}.\n Let's try again, ${name}!'`;
      console.log(message);
      return;
    }
    console.log('Correct!');
    iter(count - 1);
  };
  return iter(countRaund);
};

export default getName;
