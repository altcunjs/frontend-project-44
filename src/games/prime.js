import { Engine, getRandomNumber } from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameLogic = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number);
  return [question, correctAnswer];
};

export default () => {
  Engine(condition, gameLogic);
};
