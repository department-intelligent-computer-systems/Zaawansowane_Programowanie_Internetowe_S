var array : number[] = [1, 2, 3, 4, 5, 6, 7, 8, ]

function greatherThen(x: number, y: number): boolean {
    return x < y;
}

function curry2<T1, T2, T3>(f: (x:T1, y:T2) => T3) {
    return (x:T1) => (y:T2) => f(x, y);
}

var result : number = array.filter(curry2(greatherThen)(3))
    .reduce((a, x) => a + x)

console.log(result)