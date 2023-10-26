var array5: number[] = [1, 2, 3, 4, 5, 6];
var threshold = 3;

function greaterThen(value: number, threshold: number): boolean {
    return value > threshold;
}
function curry2<T1, T2, T3>(fn: (arg1: T1, arg2: T2) => T3) {
    return (a1: T1) => (a2: T2) => fn(a1, a2);
}

var result5 = array5.reduce((acc, curr) => curry2(greaterThen)(curr)(7) ? acc + curr : acc, 0);
export { result5 }

