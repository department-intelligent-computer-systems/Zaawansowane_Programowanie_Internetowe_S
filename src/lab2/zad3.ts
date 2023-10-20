/*
Zmodyfikuj poprzedni program tak, aby sumował tylko wartości większe od zadanej liczby.
*/

const numbers: number[] = [4, 2, 7, 9, 5];
const givenNumber = 5;
const sum3 = numbers.reduce((acc, curr) => curr > givenNumber ? acc + curr : acc, 0);

export { sum3 }