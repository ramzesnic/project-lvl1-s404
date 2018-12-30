import readlineSync from 'readline-sync';

const countRaund = 3;
const title = '\nWelcome to the Brain Games!';

export default (game, description) => {
  console.log(title);
  console.log(description);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, trueAnswer } = game();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== trueAnswer) {
      const message = `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\n Let's try again, ${name}!'`;
      console.log(message);
      return;
    }
    console.log('Correct!');
    iter(count - 1);
  };
  return iter(countRaund);
};
