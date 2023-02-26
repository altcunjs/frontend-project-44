import engine from '../index.js';
import { getRandomInRange, isEven } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = (number) => {
  const correct = isEven(number) ? 'yes' : 'no';
  return correct;
};

const makeRound = () => {
  const number = getRandomInRange(1, 100);
  const question = `Question: ${number}`;
  const answer = getAnswer(number);
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
