import readlineSync from 'readline-sync';
import { SayYourName } from './cli.js';
import { getRandomNumber, evenCorrectAnswer } from '../games/even.js';
import {
  getRandomOperator,
  calculatorCorrectAnswer,
} from '../games/calculator.js';
import { correctAnswerGCD } from '../games/gcd.js';
import {
  getProgression,
  correctAnswerProgression,
} from '../games/progression.js';
import { isPrime } from '../games/prime.js';

export const Engine = (mode) => {
  const playerName = SayYourName();

  let correctAnswersCount = 0;
  let condition, question, correctAnswer;

  while (correctAnswersCount < 3) {
    switch (mode) {
      case 'even':
        let number = getRandomNumber();
        [condition, question, correctAnswer] = [
          'Answer "yes" if the number is even, otherwise answer "no".',
          `Question: ${number}`,
          evenCorrectAnswer(number),
        ];
        break;

      case 'calculator':
        let [number1, number2, operator] = [
          getRandomNumber(),
          getRandomNumber(),
          getRandomOperator(),
        ];
        [condition, question, correctAnswer] = [
          'What is the result of the expression?',
          `Question: ${number1} ${operator} ${number2}`,
          calculatorCorrectAnswer(number1, number2, operator),
        ];
        break;
      case 'gcd':
        let [number3, number4] = [getRandomNumber(), getRandomNumber()];
        [condition, question, correctAnswer] = [
          'Find the greatest common divisor of given numbers.',
          `Question: ${number3} ${number4}`,
          correctAnswerGCD(number3, number4),
        ];
        break;
      case 'progression':
        let progression = getProgression();
        [condition, question, correctAnswer] = [
          'What number is missing in the progression?',
          `Question: ${progression}`,
          correctAnswerProgression(progression),
        ];
        break;
      case 'prime':
        let num = getRandomNumber();
        [condition, question, correctAnswer] = [
          'Answer "yes" if given number is prime. Otherwise answer "no"',
          `Question: ${num}`,
          isPrime(num),
        ];
        break;
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
};
