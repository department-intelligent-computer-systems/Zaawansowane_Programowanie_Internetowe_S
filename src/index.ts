import { sum } from './lab2/zad1';
import { sum2 } from './lab2/zad2';
import { sum3 } from './lab2/zad3';
import { sum4 } from './lab2/zad4';
import { sum5 } from './lab2/zad4';
import { result } from './lab2/zad6';
import { ClickCounter } from './lab2/zad7';

console.log('Zad1: ' + sum)
console.log('Zad2: ' + sum2)
console.log('Zad3: ' + sum3)
console.log('Zad4: ' + sum4)
console.log('Zad5: ' + sum5)
console.log('Zad6: ' + result)

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

if (button1 instanceof HTMLButtonElement && button2 instanceof HTMLButtonElement && button3 instanceof HTMLButtonElement) {
  const clickCounter = new ClickCounter(button1, button2, button3);
} else {
  console.error('Could not find one or more buttons');
}