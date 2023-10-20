import { curry2 } from "./curry2";

/* 
ZADANIE 4
Zmodyfikuj poprzedni program tak, aby predykat określający warunek wyboru wartości był zapisana 
jako osobna funkcja o nazwie greaterThen. Funkcja ta powinna umożliwiać porównywanie wartości z
zadaną liczbą, która ma być przekazywana jako parametr
*/
const numbers: number[] = [4, 2, 7, 9, 5];

function greaterThen(value: number, givenNumber: number): boolean {
    return value > givenNumber;
}

const sum4 = numbers.reduce((acc, curr) => greaterThen(curr, 5) ? acc + curr : acc, 0);

export { sum4 }

/* 
ZADANIE 5 
Do zrealizowania poprzedniego programu zastosuj przedstawioną w punkcie Currying funkcję curry2.
*/

const sum5 = numbers.reduce((acc, curr) => curry2(greaterThen)(curr)(7) ? acc + curr : acc, 0);
export { sum5 }
