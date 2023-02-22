import { Engine, getRandomNumber } from '../index.js';

const condition = 'What is the result of the expression?';

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  let randomIndex = Math.floor(Math.random() * operators.length);
  let result = operators[randomIndex];
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
  }
  return result.toString();
};

const gameLogic = () => {
  let [number1, number2, operator] = [
    getRandomNumber(1, 10),
    getRandomNumber(1, 10),
    getRandomOperator(1, 10),
  ];
  let question = `${number1} ${operator} ${number2}`;
  let correctAnswer = isCorrect(number1, number2, operator);
  return [question, correctAnswer];
};

export const startGame = () => {
  Engine(condition, gameLogic);
};
