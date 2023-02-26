import engine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeRound = () => {
  const number = getRandomInRange(1, 1000);
  const question = `Question: ${number}`;
  const answer = getAnswer(number);
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
