/*
Stwórz tablicę dowolnych liczb, a następnie napisz kod, który funkcyjnie zsumuje wszystkie elementy z
tablicy
 */
const numbers: number[] = [4, 2, 7, 9, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
export { sum }