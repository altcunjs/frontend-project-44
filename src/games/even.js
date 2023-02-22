import { Engine, getRandomNumber } from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const isCorrect = (number) => {
  const correct = isEven(number) ? 'yes' : 'no';
  return correct;
};

const gameLogic = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const correctAnswer = isCorrect(number);
  return [question, correctAnswer];
};

export default () => {
  Engine(condition, gameLogic);
};
