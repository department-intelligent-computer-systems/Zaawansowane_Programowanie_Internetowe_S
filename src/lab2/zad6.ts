/* 
ZADANIE 6 
Stwórz tablicę łańcuchów znaków (stringów) np. ["Ala", "1", "Ewa", "12.4"]. Oblicz sumę tych
wartości, które reprezentują liczby.
*/
function sumNumbers(strings: string[]): number {
    let sum = 0;
    for (const str of strings) {
        const num = parseFloat(str);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}

const strings = ["Ala", "1", "Ewa", "12.4"];
const result = sumNumbers(strings);

export { result }
