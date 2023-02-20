import { getRandomNumber } from './even.js';

let progressionStep = getRandomNumber(2, 5); // Шаг прогрессии

export const getProgression = () => {
  let progression = [];
  progression.length = getRandomNumber(5, 10); // Длина массива
  let randomElement = getRandomNumber(0, progression.length);

  progression[0] = getRandomNumber(1, 20); // Значение первого элемента массива

  for (let i = 1; i < progression.length; i += 1) {
    progression[i] = progression[i - 1] + progressionStep; //Каждый элемент массива, начиная с [1] равен предыдущему элементу + шаг прогресии
  }
  progression[randomElement] = '..';
  return progression.toString();
};

export const correctAnswerProgression = (str) => {
  let arr = str.split(',');

  let result;
  let [firstElement, secondElement] = arr;

  let EmptyElement = arr[arr.indexOf('..')]; // Узнаем индекс пропущенного числа
  let previousElement = Number(arr[arr.indexOf('..') - 1]);

  if (EmptyElement === firstElement) {
    result = secondElement - progressionStep;
  } else {
    result = previousElement + progressionStep;
  }
  return result.toString();
};
