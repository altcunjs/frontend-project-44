import { Engine, getRandomNumber } from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const isCorrect = (a, b) => {
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

const gcdGameLogic = () => {
  const [number1, number2] = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = isCorrect(number1, number2);
  return [question, correctAnswer];
};

export default () => {
  Engine(condition, gcdGameLogic);
};
