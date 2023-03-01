import engine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const number = getRandomInRange(1, 1000);
  const question = `Question: ${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
