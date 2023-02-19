import readlineSync from 'readline-sync';
import { SayYourName } from '../src/cli.js';
import { getRandomNumber, evenCorrectAnswer } from './even.js';
import { getRandomOperator, calculatorCorrectAnswer } from './calculator.js';
import { correctAnswerGCD } from './gcd.js';

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
