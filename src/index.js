import readlineSync from 'readline-sync';

const countRaund = 3;
const title = '\nWelcome to the Brain Games!';

export const getName = () => readlineSync.question('\nMay I have your name? ');

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default (game, description) => {
  console.log(title);
  console.log(description);
  const name = getName();
  console.log(`Hello, ${name}!\n`);

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const result = game();
    const answer = readlineSync.question(`Question: ${result.question}\nYour answer: `);
    if (answer !== (result.trueAnswer).toString()) {
      const message = `'${answer}' is wrong answer ;(. Correct answer was '${result.trueAnswer}'.\n Let's try again, ${name}!'`;
      console.log(message);
      return;
    }
    console.log('Correct!');
    iter(count - 1);
  };
  return iter(countRaund);
};
