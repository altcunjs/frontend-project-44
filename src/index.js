import readlineSync from 'readline-sync';
import { SayYourName } from '../src/cli.js';
import { getRandomNumber, evenCorrectAnswer } from './even.js';
import { getRandomOperator, calculatorCorrectAnswer } from './calculator.js';

export function Engine(mode) {
  const playerName = SayYourName();

  let correctAnswersCount = 0;
  let condition;
  let question;
  let correctAnswer;

  while (correctAnswersCount < 3) {
    if (mode === 'even') {
      let number = getRandomNumber();
      condition = 'Answer "yes" if the number is even, otherwise answer "no".';
      question = `Question: ${number}`;
      correctAnswer = evenCorrectAnswer(number);
    }
    if (mode === 'calculator') {
      let number1 = getRandomNumber();
      let number2 = getRandomNumber();
      let operator = getRandomOperator();

      condition = 'What is the result of the expression?';
      question = `Question: ${number1} ${operator} ${number2}`;
      correctAnswer = calculatorCorrectAnswer(number1, number2, operator);
    }
    // Логика
    console.log(condition);
    console.log(question);
    const userAnswer = readlineSync.question('Enter your answer:');
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === correctAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${playerName}!'`
      );
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
}
