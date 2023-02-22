import { Engine, getRandomNumber } from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const isCorrect = (a, b) => {
  let result;
  while (a != 0 && b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  result = a + b;
  return result.toString();
};

const gameLogic = () => {
  let [number1, number2] = [getRandomNumber(), getRandomNumber()];
  let question = `${number1} ${number2}`;
  let correctAnswer = isCorrect(number1, number2);
  return [question, correctAnswer];
};

export const startGame = () => {
  Engine(condition, gameLogic);
};
