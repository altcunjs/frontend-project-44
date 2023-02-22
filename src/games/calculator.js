import { Engine, getRandomNumber } from '../index.js';

const condition = 'What is the result of the expression?';

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const result = operators[randomIndex];
  return result;
};

export const isCorrect = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
    default:
      `We haven't added this operator yet.`;
  }
  return result.toString();
};

const gameLogic = () => {
  const [number1, number2, operator] = [
    getRandomNumber(1, 10),
    getRandomNumber(1, 10),
    getRandomOperator(1, 10),
  ];
  const question = `Question: ${number1} ${operator} ${number2}`;
  const correctAnswer = isCorrect(number1, number2, operator);
  return [question, correctAnswer];
};

export const startGame = () => {
  Engine(condition, gameLogic);
};
