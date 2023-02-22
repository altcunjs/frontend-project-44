import { Engine, getRandomNumber } from '../index.js';

const condition =
  'Answer "yes" if given number is prime. Otherwise answer "no"';

export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameLogic = () => {
  let number = getRandomNumber();
  let question = number;
  let correctAnswer = isPrime(number);
  return [question, correctAnswer];
};

export const startGame = () => {
  Engine(condition, gameLogic);
};
