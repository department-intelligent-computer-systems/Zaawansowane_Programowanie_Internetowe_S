//Lab 1
/*
let authors:AuthorsList = new AuthorsList();

authors.addAuthor(new Author("John", "Smith", "abc@def.ghi"));
authors.addAuthor(new Author("Jane", "Brown", "def@def.ghi"));
authors.addAuthor(new Author("Mark", "Davies", "ghi@def.ghi"));
authors.addAuthor(new Author("Greg", "Taylor", "jkl@def.ghi"));
authors.addAuthor(new Author("Mary", "Jones", "mno@def.ghi"));

//authors.setExportMethod();
*/
//Lab 2

var array : number[] = [4, 3, 2, 7, 6, 9, 2, 6, 1, 3];

var sum : (a : number, b : number) => number;

sum = (a:number, b:number) => (a+b)

console.log(array.reduce(sum))

sum = (a:number, b:number) => (a + (b % 2 == 0 ? b : 0 ))

console.log(array.reduce(sum))

sum = (a:number, b:number) => (a + (b > 5 ? b : 0 ))

console.log(array.reduce(sum))

var greaterThan : (b : number) => ((a:number) => boolean);

greaterThan = (b : number) => ((a:number) => (a > b));

sum = (a:number, b:number) => (a+b)

console.log(array.filter(greaterThan(5)).reduce(sum));

//2.5

function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
}

console.log()