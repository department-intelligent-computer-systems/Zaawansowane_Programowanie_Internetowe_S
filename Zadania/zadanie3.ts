var array = [1, 2, 3, 4, 5, 6, 7, 8]
var resutl = array.filter(x => x > 4 )
    .reduce((a, x) => a + x)
console.log(resutl)