/* 
Zmodyfikuj poprzedni program tak, aby sumował tylko wartości parzyste
*/
const numbers: number[] = [4, 2, 7, 9, 5];
const sum2 = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);

export { sum2 }