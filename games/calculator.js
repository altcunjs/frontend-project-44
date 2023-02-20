export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  let randomIndex = Math.floor(Math.random() * operators.length);
  let result = operators[randomIndex];
  return result;
};

export const calculatorCorrectAnswer = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
  }
  return result.toString();
};
