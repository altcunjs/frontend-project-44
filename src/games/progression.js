import engine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'What number is missing in the progression?';
let progressionStep; // Шаг прогрессии

const getProgression = () => {
  let progression = [];
  progressionStep = getRandomInRange(2, 10);
  progression.length = getRandomInRange(5, 10);
  const randomElement = getRandomInRange(0, progression.length);

  progression[0] = getRandomInRange(1, 20);

  for (let i = 1; i < progression.length; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  progression[randomElement] = '..';
  progression = progression.toString();
  progression = progression.replace(/,/g, ' ');
  return progression;
};

const getAnswer = (str) => {
  const arr = str.split(' ');
  let result;
  const [firstElement, secondElement] = arr;

  const EmptyElement = arr[arr.indexOf('..')];
  const previousElement = Number(arr[arr.indexOf('..') - 1]);

  if (EmptyElement === firstElement) {
    result = secondElement - progressionStep;
  } else {
    result = previousElement + progressionStep;
  }
  return result.toString();
};

const makeRound = () => {
  const progression = getProgression();
  const question = `Question: ${progression}`;
  const answer = getAnswer(progression);
  return [question, answer];
};

export default () => {
  engine(rules, makeRound);
};
