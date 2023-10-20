import { ClickCounterApp } from "./zad7";


// Zadanie 1: 

function sumArray(arr: number[]): number {
    return arr.reduce((acc, current) => acc + current, 0);
  }

//Zadanie 2
function sumEvenNumbers(arr: number[]): number {
    return arr.filter((num) => num % 2 === 0).reduce((acc, current) => acc + current, 0);
  }

//Zadanie 3
function sumGreaterThan(arr: number[], threshold: number): number {
    return arr.filter((num) => num > threshold).reduce((acc, current) => acc + current, 0);
  }

//Zadanie 4
function sumWithPredicate(arr: number[], predicate: (num: number,tmp:number) => boolean): number {
    return arr.filter(predicate).reduce((acc, current) => acc + current, 0);
  }

  function greaterThen (num:number, tmp:number):boolean{
  return num<tmp
  }

//zadanie 5
  function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3) {
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
    }
    
    function curryGreather(tab:number[], numb:number):number{
      return tab.filter(curry2(greaterThen)(numb)).reduce((acc,curent)=>acc+curent,0);
    }


// Zadanie 6

function stringTableNum(arrOfStringNumbers:any[]):number{
  const sum = arrOfStringNumbers
  .map(parseFloat) 
  .filter((num) => !isNaN(num)) 
  .reduce((acc, current) => acc + current, 0);
return sum;

}

const arrOfStringNumbers: string[] = ["Ala", "1", "Ewa", "12.4"];
const array1 = [1, 2, 3, 4, 5];
const threshold = 3;

console.log("Wynik sumy elemntow tablicy: ", sumArray(array1));
console.log("Wynik sumy parzystych elemntow tablicy: ", sumEvenNumbers(array1));
console.log("Wynik sumy elemntow większych od treshold",sumGreaterThan(array1,threshold));

console.log("Suma wartości spełniających predykat:", sumWithPredicate(array1, x=>x>2));
console.log("Suma wartości spełniających predykat(curring):", curryGreather(array1,4));

console.log("Suma wartości liczbowy w tablicy mieszanej: ", stringTableNum(arrOfStringNumbers));



//zapis do index.html

const zmienne=document.getElementById("zmienne");
zmienne!.innerText="Tablica liczb : "+array1+"\n"+"Tablica mieszana: "+arrOfStringNumbers+"\n"+"Próg: "+threshold+"\n\n"

const task1=document.getElementById("task1");
  task1!.innerText="Suma wszystkich elementów: "+sumArray(array1);

    const task2=document.getElementById("task2");
    task2!.innerText="Suma wartości parzystych: "+sumEvenNumbers(array1);

    const task3=document.getElementById("task3");
    task3!.innerText="Suma wartości większych od "+threshold+": "+sumGreaterThan(array1, threshold);

    const task4=document.getElementById("task4");
    task4!.innerText="Suma wartości spełniających predykat: "+sumWithPredicate(array1, x=>x>2);

    const task5=document.getElementById("task5");
    task5!.innerText=("Suma wartości spełniających predykat(curring):"+curryGreather(array1,4));

    const task6=document.getElementById("task6");
    task6!.innerText="Suma wartości liczbowy w tablicy mieszanej: "+stringTableNum(arrOfStringNumbers);



  
    
    new ClickCounterApp();