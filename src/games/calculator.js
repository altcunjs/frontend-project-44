import engine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'What is the result of the expression?';

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const result = operators[randomIndex];
  return result;
};

const getAnswer = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operator: ${operator} - is incorrect!`);
  }
};

const makeRound = () => {
  const number1 = getRandomInRange(1, 10);
  const number2 = getRandomInRange(1, 10);
  const operator = getRandomOperator();
  const question = `Question: ${number1} ${operator} ${number2}`;
  const answer = String(getAnswer(number1, number2, operator));
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
