import readlineSync from 'readline-sync';
import { SayYourName } from '../src/cli.js';

const playerName = SayYourName();

export const getRandomNumber = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isEven = (number) => number % 2 === 0;

export const correctAnswer = (number) => {
  const correct = isEven(number) ? 'yes' : 'no';
  return correct;
};

export const QuestionAnswer = () => {
  //const answerOptions = ['yes', 'no'];
  let correctAnswersCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount < 3) {
    let randomNumber = getRandomNumber();
    console.log('Question: ' + randomNumber);
    const userAnswer = readlineSync.question();
    console.log('Your answer: ' + userAnswer);

    if (userAnswer === correctAnswer(randomNumber)) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer(
          randomNumber
        )}'`
      );
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};
