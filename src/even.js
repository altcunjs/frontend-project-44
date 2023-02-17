export const getRandomNumber = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isEven = (number) => number % 2 === 0;

export const evenCorrectAnswer = (number) => {
  const correct = isEven(number) ? 'yes' : 'no';
  return correct;
};
