var array = [1, 2, 3, 4, 5, 6, 7, 8,];
function greatherThen(x, y) {
    return x < y;
}
function curry2(f) {
    return function (x) { return function (y) { return f(x, y); }; };
}
var result = array.filter(curry2(greatherThen)(3))
    .reduce(function (a, x) { return a + x; });
console.log(result);
