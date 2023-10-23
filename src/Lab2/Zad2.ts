var array2: number[] = [1, 2, 3, 4, 5, 6];
var result2 = array2.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);
export { result2 }