const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const greaterThan = (number: number) => number > 3;

export const greaterThanSum = numbers
  .filter(greaterThan)
  .reduce((acc, num) => acc + num, 0);
