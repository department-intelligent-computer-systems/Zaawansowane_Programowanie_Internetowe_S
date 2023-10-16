//zad1
// var array = [1,2,3,4,5,6]
// var result = array.reduce((a,b) => a+b)
// console.log(result)

//zad2
var array = [1,2,3,4,5,6]
var result = array.filter((x) => x%2 === 0).reduce((a,b) => a+b)
console.log(result)

//zad3
var array = [1,2,3,4,5,6]
var result = array.filter((x) => x>4).reduce((a,b) => a+b)
console.log(result)