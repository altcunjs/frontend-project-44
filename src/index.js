import readlineSync from 'readline-sync';
import { SayYourName } from './cli.js';

export const getRandomNumber = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const Engine = (condition, gameLogic) => {
  let correctAnswersCount = 0;

  const userName = SayYourName();

  console.log(condition);

  while (correctAnswersCount < 3) {
    const [question, correctAnswer] = gameLogic();

    console.log('Question: ' + question);
    const userAnswer = readlineSync.question('Enter your answer:');
    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === correctAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!'`
      );
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
