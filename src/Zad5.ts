const curry2 = (fn: (arg1: number, arg2: number) => any) => {
  return (arg1: number) => (arg2: number) => fn(arg1, arg2);
};

const sum = (a: number, b: number) => a + b;
const isGreaterThan = (threshold: number, number: number) => number > threshold;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const curriedSum = curry2(sum);
const curriedIsGreaterThan = curry2(isGreaterThan);

const greaterThan3 = curriedIsGreaterThan(3);

export const greaterThanSumCurry2 = numbers
  .filter(greaterThan3)
  .reduce((acc, num) => curriedSum(acc)(num), 0);
