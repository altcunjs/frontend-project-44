import { Engine, getRandomNumber } from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const isCorrect = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const result = a + b;
  return result.toString();
};

const gameLogic = () => {
  const [number1, number2] = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = isCorrect(number1, number2);
  return [question, correctAnswer];
};

export default () => {
  Engine(condition, gameLogic);
};
