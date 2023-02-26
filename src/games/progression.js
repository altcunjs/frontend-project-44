import engine from '../index.js';
import { getRandomInRange } from '../utils.js';

const rules = 'What number is missing in the progression?';
let progressionStep; // Шаг прогрессии

const getProgression = () => {
  let progression = [];
  progressionStep = getRandomInRange(2, 10);
  progression.length = getRandomInRange(5, 10); // Случайная длина массива
  const randomElement = getRandomInRange(0, progression.length); // Случайный элемент в созданном массиве

  progression[0] = getRandomInRange(1, 20); // Значение первого элемента массива

  for (let i = 1; i < progression.length; i += 1) {
    progression[i] = progression[i - 1] + progressionStep; // Каждый элемент массива равен его предыдущему элементу + шаг прогрессии
  }
  progression[randomElement] = '..'; // Заменяем случайный элемент ..
  progression = progression.toString();
  progression = progression.replace(/,/g, ' ');
  return progression;
};

const getAnswer = (str) => {
  const arr = str.split(' ');
  let result;
  const [firstElement, secondElement] = arr;

  const EmptyElement = arr[arr.indexOf('..')]; // Узнаем индекс пропущенного элемента
  const previousElement = Number(arr[arr.indexOf('..') - 1]); // Предыдущий элемент относительно пропущенного

  if (EmptyElement === firstElement) {
    result = secondElement - progressionStep; // Если пропущенный элемент является первым в прогрессии, то он равен второму элементу - шаг прогресии
  } else {
    result = previousElement + progressionStep; // В любом другом случае, пропущенный элемент равен предыдущему элементу + шаг прогресии
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
