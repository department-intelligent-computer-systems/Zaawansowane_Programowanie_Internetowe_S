const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const greaterThan = numbers
  .filter((num) => num > 3)
  .reduce((acc, num) => acc + num, 0);
