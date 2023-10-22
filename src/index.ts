import { sum } from "./Zad1";
import { evenSum } from "./Zad2";
import { greaterThan } from "./Zad3";
import { greaterThanSum } from "./Zad4";
import { greaterThanSumCurry2 } from "./Zad5";
import { isNumberSum } from "./Zad6";
// import { ClickCounter } from "./Clicks";
import {
  catchError,
  combineLatest,
  filter,
  fromEvent,
  map,
  merge,
  mergeMap,
  of,
  retry,
  retryWhen,
  startWith,
  switchMap,
  take,
  takeUntil,
  throwError,
  timer,
} from "rxjs";

// console.log(sum);
// console.log(evenSum);
// console.log(greaterThan);
// console.log(greaterThanSum);
// console.log(greaterThanSumCurry2);
// console.log(isNumberSum);

// ZAD 7-9
// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('clickButton') as HTMLButtonElement;
//   const clickCounter = new ClickCounter(button);
// });

// ZAD 10
// const addButton = document.querySelector('#buttonAdd') as HTMLButtonElement;
// const startButton = document.querySelector('#buttonStart') as HTMLButtonElement;
// const stopButton = document.querySelector('#buttonStop') as HTMLButtonElement;

// if (addButton && startButton && stopButton) {
//   const clickCounter = new ClickCounter(addButton, startButton, stopButton);
// } else {
//   console.error('Could not find one or more buttons');
// }

// ZAD 11
// const addButton = document.querySelector('#buttonAdd') as HTMLButtonElement;
// const firstButton = document.querySelector('#buttonFirst') as HTMLButtonElement;
// const secondButton = document.querySelector('#buttonSecond') as HTMLButtonElement;

// if (addButton && firstButton && secondButton) {
//   const firstInputId = "inputFirst";
//   const secondInputId = "inputSecond";
//   const clickCounter = new ClickCounter(addButton, firstButton, secondButton, firstInputId, secondInputId);
// } else {
//   console.error('Could not find one or more buttons');
// }

// ZAD 12
// const textInput = document.getElementById("textInput") as HTMLInputElement;
// const outputText = document.getElementById(
//   "outputText"
// ) as HTMLParagraphElement;

// const inputObservable = fromEvent(textInput, "input").pipe(
//   map((event: Event) => (event.target as HTMLInputElement).value)
// );

// inputObservable.subscribe((text: string) => {
//   outputText.textContent = text;
// });

// ZAD 13
// const textInput = document.getElementById('textInput') as HTMLInputElement;
// const outputText = document.getElementById('outputText') as HTMLParagraphElement;

// const inputObservable = fromEvent(textInput, 'input')
//   .pipe(
//     map((event: Event) => (event.target as HTMLInputElement).value),
//     filter((text: string) => text.length > 5)
//   );

// inputObservable.subscribe((text: string) => {
//   outputText.textContent = text;
// });

// ZAD 14
// const textInput = document.getElementById("textInput") as HTMLInputElement;
// const numberInput = document.getElementById("numberInput") as HTMLInputElement;
// const outputText = document.getElementById(
//   "outputText"
// ) as HTMLParagraphElement;

// const textObservable = fromEvent(textInput, "input").pipe(
//   map((event: Event) => (event.target as HTMLInputElement).value)
// );

// const numberObservable = fromEvent(numberInput, "input").pipe(
//   map((event: Event) => (event.target as HTMLInputElement).value),
//   map(parseFloat),
//   filter((value) => !isNaN(value)),
//   startWith(NaN)
// );

// combineLatest([textObservable, numberObservable]).subscribe(
//   ([text, minChars]) => {
//     if (isNaN(minChars) || text.length > minChars) {
//       outputText.textContent = text;
//     } else {
//       outputText.textContent = "";
//     }
//   }
// );

// ZAD 15
// const side1Input = document.getElementById("side1") as HTMLInputElement;
// const side2Input = document.getElementById("side2") as HTMLInputElement;
// const resultDiv = document.getElementById("result") as HTMLDivElement;

// const side1Input$ = fromEvent(side1Input, "input").pipe(
//   map((event) => (event.target as HTMLInputElement).value)
// );

// const side2Input$ = fromEvent(side2Input, "input").pipe(
//   map((event) => (event.target as HTMLInputElement).value)
// );

// const calculateSquareArea = (side1: number, side2: number) => {
//   if (isNaN(side1) || isNaN(side2)) {
//     throw new Error("Obie wartości muszą być liczbami.");
//   }
//   return side1 * side2;
// };

// const showError = (error: any) => {
//   resultDiv.textContent = `Błąd: ${error.message}`;
// };

// side1Input$
//   .pipe(
//     mergeMap((side1) =>
//       side2Input$.pipe(
//         map((side2) =>
//           calculateSquareArea(parseFloat(side1), parseFloat(side2))
//         ),
//         catchError((error) => {
//           showError(error);
//           return [];
//         })
//       )
//     )
//   )
//   .subscribe((result) => {
//     resultDiv.textContent = `Pole kwadratu wynosi: ${result}`;
//   });

// ZAD 16
// const side1Input = document.getElementById('side1') as HTMLInputElement;
// const side2Input = document.getElementById('side2') as HTMLInputElement;
// const resultDiv = document.getElementById('result') as HTMLDivElement;

// const side1Input$ = fromEvent(side1Input, 'input').pipe(
//     map(event => (event.target as HTMLInputElement).value)
// );

// const side2Input$ = fromEvent(side2Input, 'input').pipe(
//     map(event => (event.target as HTMLInputElement).value)
// );

// const calculateSquareArea = (side1: number, side2: number) => {
//     if (isNaN(side1) || isNaN(side2)) {
//         throw new Error('Obie wartości muszą być liczbami.');
//     }
//     return side1 * side2;
// };

// const showError = (error: any) => {
//     resultDiv.textContent = `Błąd: ${error.message}`;
// };

// side1Input$.pipe(
//     mergeMap(side1 => side2Input$.pipe(
//         map(side2 => calculateSquareArea(parseFloat(side1), parseFloat(side2))),
//         catchError(error => {
//             showError(error);
//             return throwError(error);
//         }),
//         retry(6)
//     ))
// ).subscribe({
//     next: result => {
//         resultDiv.textContent = `Pole kwadratu wynosi: ${result}`;
//     },
//     error: err => {
//         resultDiv.textContent = 'Wprowadziłeś błędną wartość 4 razy. Koniec zabawy.';
//     }
// });

// ZAD 17
// const side1Input = document.getElementById('side1') as HTMLInputElement;
// const side2Input = document.getElementById('side2') as HTMLInputElement;
// const resultDiv = document.getElementById('result') as HTMLDivElement;

// const side1Input$ = fromEvent(side1Input, 'input').pipe(
//     map(event => (event.target as HTMLInputElement).value)
// );

// const side2Input$ = fromEvent(side2Input, 'input').pipe(
//     map(event => (event.target as HTMLInputElement).value)
// );

// const calculateSquareArea = (side1: number, side2: number) => {
//     if (isNaN(side1) || isNaN(side2)) {
//         throw new Error('Obie wartości muszą być liczbami.');
//     }
//     return side1 * side2;
// };

// const showError = (error: any) => {
//     resultDiv.textContent = `Błąd: ${error.message}`;
// };

// const clearError = () => {
//     resultDiv.textContent = '';
// };

// side1Input$.pipe(
//     mergeMap(side1 => side2Input$.pipe(
//         map(side2 => calculateSquareArea(parseFloat(side1), parseFloat(side2))),
//         catchError(error => {
//             showError(error);
//             return throwError(error);
//         }),
//         retryWhen(errors => errors.pipe(
//         ))
//     ))
// ).subscribe(result => {
//     clearError();
//     resultDiv.textContent = `Pole kwadratu wynosi: ${result}`;
// });

// ZAD 18
// const side1Input = document.getElementById("side1") as HTMLInputElement;
// const side2Input = document.getElementById("side2") as HTMLInputElement;
// const resultDiv = document.getElementById("result") as HTMLDivElement;

// const side1Input$ = fromEvent(side1Input, "input").pipe(
//   map((event) => (event.target as HTMLInputElement).value),
//   filter((value) => value.trim() !== "")
// );

// const side2Input$ = fromEvent(side2Input, "input").pipe(
//   map((event) => (event.target as HTMLInputElement).value),
//   filter((value) => value.trim() !== "")
// );

// const calculateSquareArea = (side1: number, side2: number) => {
//   if (isNaN(side1) || isNaN(side2)) {
//     throw new Error("Obie wartości muszą być liczbami.");
//   }
//   return side1 * side2;
// };

// const showError = (error: any) => {
//   resultDiv.textContent = `Błąd: ${error.message}`;
// };

// const clearError = () => {
//   resultDiv.textContent = "";
// };

// side1Input$
//   .pipe(
//     mergeMap((side1) =>
//       side2Input$.pipe(
//         map((side2) =>
//           calculateSquareArea(parseFloat(side1), parseFloat(side2))
//         ),
//         catchError((error) => {
//           showError(error);
//           return throwError(error);
//         }),
//         retryWhen((errors) => errors.pipe())
//       )
//     )
//   )
//   .subscribe((result) => {
//     clearError();
//     resultDiv.textContent = `Pole kwadratu wynosi: ${result}`;
//   });

// ZAD 19
// const trackedDiv = document.getElementById("trackedDiv");

// if (trackedDiv) {
//   const mouseMove$ = fromEvent(document, "mousemove");

//   mouseMove$
//     .pipe(
//       map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY })),
//       switchMap((pos) => {
//         trackedDiv.style.left = pos.x - 10 + "px";
//         trackedDiv.style.top = pos.y - 10 + "px";
//         return mouseMove$.pipe(
//           map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY })),
//           takeUntil(mouseMove$)
//         );
//       })
//     )
//     .subscribe();
// }

// ZAD 20
// const trackedDiv = document.getElementById("trackedDiv");

// if (trackedDiv) {
//   const mouseMove$ = fromEvent<MouseEvent>(document, "mousemove");

//   mouseMove$
//     .pipe(
//       map((event) => ({ x: event.clientX, y: event.clientY })),
//       switchMap((pos) => {
//         return timer(100).pipe(
//           map(() => pos),
//           takeUntil(mouseMove$)
//         );
//       })
//     )
//     .subscribe((pos) => {
//       trackedDiv.style.left = pos.x - 10 + "px";
//       trackedDiv.style.top = pos.y - 10 + "px";
//     });
// }
