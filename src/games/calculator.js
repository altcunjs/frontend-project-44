import { Engine, getRandomNumber } from '../index.js';

const condition = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const result = operators[randomIndex];
  return result;
};

const isCorrect = (number1, number2, operator) => {
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
      break;
    default:
      result = 'Operator does not exist';
      break;
  }
  return result.toString();
};

const gameLogic = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const question = `Question: ${number1} ${operator} ${number2}`;
  const correctAnswer = isCorrect(number1, number2, operator);
  return [question, correctAnswer];
};

export default () => {
  Engine(condition, gameLogic);
};
