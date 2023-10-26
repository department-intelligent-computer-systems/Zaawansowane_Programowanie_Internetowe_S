import { TypePredicate } from "typescript";

let tabNum:number[] = [1,2,3,4,5,7]
let tabChar: string[] = ["Ala", "1", "Ewa", "12.4"]
let func :(tablica:number[]) =>number;
func = function (tablica:[]):number{
    let sum = 0;
    tablica.forEach(element => {
        sum+=element;
        console.log(sum);
    });
    return sum
}
let funcRed: (tablica:number[]) =>number;
let funcRedParz: (tablica:number[]) =>number;
let funcRedBig: (tablica:number[], big:number) =>number;
funcRed = function(tablica: number[]): number {
    return tablica.reduce((prev, curr) => curr + prev, 0);
};
funcRedParz = function(tablica: number[]): number {
    return tablica.reduce((prev, curr) => {
        if (curr % 2 === 0) {
            return curr + prev;
        } else {
            return prev;
        }
    }, 0);
};
funcRedBig = function(tablica: number[], big:number): number {
    return tablica.reduce((prev, curr) => {
        if (curr > big) {
            return curr + prev;
        } else {
            return prev;
        }
    }, 0);
};
function GreaterThan(predykat: number, curr:number):boolean{
    if(curr>predykat){

        return true;
    }
    else{
        return false;
    }
}

function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
    }
    
function funcRedPred(tablica:number[], big:number):number{
     return tablica.filter(curry2(GreaterThan)(big)).reduce((prev, curr)=>
    {
          return curr+prev;
    })
    
}
function CheckNum(char:string):number{
    if(!isNaN(parseFloat(char)) ){
        return parseFloat(char);
    }
    else{
        return 0;
    }
}
function funcCheckChar(tablica:string[]):number{
    let filtrowana = tablica.map(d=>CheckNum(d))
    return filtrowana.reduce((prev, curr)=>
   {
         return curr+prev;
   })
   
}

console.log(funcCheckChar(tabChar))
/*
console.log(funcRed(tabNum))
console.log(funcRedParz(tabNum));
console.log(funcRedBig(tabNum, 3));
console.log(funcRedPred(tabNum, 5))
*/