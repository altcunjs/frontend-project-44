export const correctAnswerGCD = (number1, number2) => {
  let result;
  while (number1 != 0 && number2 != 0) {
    if (number1 > number2) {
      number1 = number1 % number2;
    } else {
      number2 = number2 % number1;
    }
  }
  result = number1 + number2;
  return result.toString();
};
