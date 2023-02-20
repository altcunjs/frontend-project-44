export const correctAnswerGCD = (a, b) => {
  let result;
  while (a != 0 && b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  result = a + b;
  return result.toString();
};
