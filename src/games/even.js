import engine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeRound = () => {
  const number = getRandomInRange(1, 100);
  const question = `Question: ${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
