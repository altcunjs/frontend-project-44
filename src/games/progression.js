import engine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const makeRound = () => {
  const start = getRandomInRange(1, 20);
  const step = getRandomInRange(2, 5);
  const length = getRandomInRange(5, 7);
  const progression = getProgression(start, step, length);
  const randomIndex = getRandomInRange(0, length);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
