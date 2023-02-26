/* eslint-disable no-param-reassign */
export const getRandomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
/* eslint-enable no-param-reassign */
export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const result = operators[randomIndex];
  return result;
};

export const isEven = (number) => number % 2 === 0;
