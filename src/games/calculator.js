import engine from '../index.js';
import { getRandomInRange, getRandomOperator } from '../utils.js';

const rules = 'What is the result of the expression?';

const getAnswer = (number1, number2, operator) => {
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

const makeRound = () => {
  const number1 = getRandomInRange(1, 10);
  const number2 = getRandomInRange(1, 10);
  const operator = getRandomOperator();
  const question = `Question: ${number1} ${operator} ${number2}`;
  const answer = getAnswer(number1, number2, operator);
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
