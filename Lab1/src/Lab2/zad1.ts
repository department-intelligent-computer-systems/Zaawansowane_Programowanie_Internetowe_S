

//zad1 Stwórz tablicę dowolnych liczb, a następnie napisz kod, który funkcyjnie zsumuje wszystkie elementy z tablicy
export let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export function zad1(numbers: number[]): number {
    console.log("zad1 Stwórz tablicę dowolnych liczb, a następnie napisz kod, który funkcyjnie zsumuje wszystkie elementy z tablicy");
    return numbers.reduce((a, b) => a + b, 0);
}

//Zadanie 2. Zmodyfikuj poprzedni program tak, aby sumował tylko wartości parzyste.

export function zad2(numbers:number[]): number{
    console.log("Zadanie 2. Zmodyfikuj poprzedni program tak, aby sumował tylko wartości parzyste.");
    return numbers.filter((a) => a%2==0).reduce((a,b) => a+b,0);
}

//Zadanie 3. Zmodyfikuj poprzedni program tak, aby sumował tylko wartości większe od zadanej liczby.

export function zad3(numbers:number[], n:number): number{
    console.log("Zadanie 3. Zmodyfikuj poprzedni program tak, aby sumował tylko wartości większe od zadanej liczby");
    return numbers.filter((a) => a>n).reduce((a,b) => a+b,0);
    
}
// Zmodyfikuj poprzedni program tak, aby predykat określający warunek wyboru wartości był zapisana jako osobna funkcja o nazwie greaterThen.      Funkcja ta powinna umożliwiać porównywanie wartości z
// zadaną liczbą, która ma być przekazywana jako parametr.


// export function greaterThen() {
//     const userInput = prompt('Podaj liczbę:');
//     if (userInput !== null) {
//         const threshold = parseFloat(userInput); // Parsowanie wprowadzonej liczby na typ float
//         if (!isNaN(threshold)) {
//             const result = zad3(numbers, threshold);
//             console.log(`Suma wartości większych od ${threshold} wynosi: ${result}`);
//         } else {
//             console.log('Nieprawidłowa liczba.');
//         }
//     }
// }


//Zadanie 5. Do zrealizowania poprzedniego programu zastosuj przedstawioną w punkcje Currying funkcję curry2.

export function zad5<nubmer, userInput, result>(numbers:number[], userInput: number, result: number): number{
    console.log("Zadanie 5. Do zrealizowania poprzedniego programu zastosuj przedstawioną w punkcje Currying funkcję curry2.");
    return numbers.filter((a) => a>userInput).reduce((a,b) => a+b,0);
    
}

//Zadanie 6. Stwórz tablicę łańcuchów znaków (stringów) np. ["Ala", "1", "Ewa", "12.4"]. Oblicz sumę tych wartości, które reprezentują liczby.

export let strings = ["Ala", "1", "Ewa", "12.4"];

export function zad6(strings: string[]): number{
    console.log("Zadanie 6. Stwórz tablicę łańcuchów znaków (stringów) np. [\"Ala\", \"1\", \"Ewa\", \"12.4\"]. Oblicz sumę tych wartości, które reprezentują liczby.");
    return strings.filter((a) => !isNaN(parseFloat(a))).map((a) => parseFloat(a)).reduce((a,b) => a+b,0);
}


//Zadanie 7 .Napisz aplikację obiektowo-reaktywną, która w paragrafie wyświetli ile razy został naciśnięty przycik.
// Klasa powinna zawierać pole, które będzie przechowywać liczbę kliknięć. Można wykorzystać operator
// tap, który służy do wprowadzania efektów ubocznych.




