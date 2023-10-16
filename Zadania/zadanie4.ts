var array = [1, 2, 3, 4, 5, 6, 7, 8]

function greaterThen(y) {
    return (x) => x > y
}

var resutl = array.filter(greaterThen(3))
    .reduce((a, x) => a + x);

console.log(resutl)