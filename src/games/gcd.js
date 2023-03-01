import engine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getAnswer = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const result = num1 + num2;
  return result.toString();
};

const makeRound = () => {
  const [number1, number2] = [getRandomInRange(1, 100), getRandomInRange(1, 100)];
  const question = `Question: ${number1} ${number2}`;
  const answer = getAnswer(number1, number2);
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
