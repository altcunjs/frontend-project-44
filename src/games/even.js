import { Engine, getRandomNumber } from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isCorrect = (number) => {
  const isEven = (number) => number % 2 === 0;
  const correct = isEven(number) ? 'yes' : 'no';
  return correct;
};

const gameLogic = () => {
  const number = getRandomNumber();
  let question = `Question: ${number}`;
  let correctAnswer = isCorrect(number);
  return [question, correctAnswer];
};

export const startGame = () => {
  Engine(condition, gameLogic);
};
