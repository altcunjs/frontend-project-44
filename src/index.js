import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = makeRound();

    console.log(question);
    const userAnswer = readlineSync.question('Enter your answer:');
    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${userName}!'`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
