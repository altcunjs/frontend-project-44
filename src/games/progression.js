import { Engine, getRandomNumber } from '../index.js';

const condition = 'What number is missing in the progression?';

const progressionStep = getRandomNumber(2, 5); // Шаг прогрессии

const getProgression = () => {
  let progression = [];
  progression.length = getRandomNumber(5, 10); // Длина массива
  const randomElement = getRandomNumber(0, progression.length);

  progression[0] = getRandomNumber(1, 20); // Значение первого элемента массива

  for (let i = 1; i < progression.length; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  progression[randomElement] = '..';
  progression = progression.toString();
  progression = progression.replace(/,/g, ' ');
  return progression;
};

const isCorrect = (str) => {
  const arr = str.split(' ');

  let result;
  const [firstElement, secondElement] = arr;

  const EmptyElement = arr[arr.indexOf('..')]; // Узнаем индекс пропущенного числа
  const previousElement = Number(arr[arr.indexOf('..') - 1]); // Предыдущий элемент относительно пропущенного

  if (EmptyElement === firstElement) {
    result = secondElement - progressionStep;
  } else {
    result = previousElement + progressionStep;
  }
  return result.toString();
};

const progressionGameLogic = () => {
  const progression = getProgression();
  const question = `Question: ${progression}`;
  const correctAnswer = isCorrect(progression);
  return [question, correctAnswer];
};

export default () => {
  Engine(condition, progressionGameLogic);
};
