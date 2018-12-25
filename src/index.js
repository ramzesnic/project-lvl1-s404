import readlineSync from 'readline-sync';
// не коммитит когда делаю только reindent
export default () => {
	const answer = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${answer}!`);
};
