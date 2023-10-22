import {
  fromEvent,
  map,
  scan,
  tap,
  takeUntil,
  shareReplay,
  filter,
  withLatestFrom,
  first,
  exhaustMap,
  take,
  switchMap,
  distinctUntilChanged,
  debounceTime,
} from "rxjs";

// ZAD 7

// export class ClickCounter {
//     private count = 0;
//     private counterElement: HTMLSpanElement;

//     constructor(private button: HTMLButtonElement) {
//         this.counterElement = document.getElementById('clickCounter') as HTMLSpanElement;

//         fromEvent(button, 'click')
//             .pipe(
//                 tap(() => {
//                     this.count++;
//                     this.updateCounter();
//                 })
//             )
//             .subscribe();
//     }

//     private updateCounter() {
//         this.counterElement.textContent = `${this.count}`;
//     }
// }

// ZAD 8

// export class ClickCounter {
//   private counterElement: HTMLSpanElement;

//   constructor(private button: HTMLButtonElement) {
//     this.counterElement = document.getElementById(
//       "clickCounter"
//     ) as HTMLSpanElement;

//     fromEvent(button, "click")
//       .pipe(
//         map(() => 1),
//         scan((acc, value) => acc + value, 0),
//         tap((count) => this.updateCounter(count))
//       )
//       .subscribe();
//   }

//   private updateCounter(count: number) {
//     this.counterElement.textContent = `${count}`;
//   }
// }

// ZAD 9

// export class ClickCounter {
//     private counterElement: HTMLSpanElement;

//     constructor(private button: HTMLButtonElement) {
//         this.counterElement = document.getElementById('clickCounter') as HTMLSpanElement;

//         fromEvent(button, 'click')
//             .pipe(
//                 map(() => 1),
//                 scan((acc, value) => acc + value, 0),
//                 take(5),
//                 tap(count => this.updateCounter(count))
//             )
//             .subscribe();
//     }

//     private updateCounter(count: number) {
//         this.counterElement.textContent = `${count}`;
//     }
// }

// ZAD 10

// export class ClickCounter {
//     private counterElement: HTMLSpanElement;
//     private clickSubscription: any;

//     constructor(
//         private addButton: HTMLButtonElement,
//         private startButton: HTMLButtonElement,
//         private stopButton: HTMLButtonElement
//     ) {
//         this.counterElement = document.getElementById('clickCounter') as HTMLSpanElement;

//         const click$ = fromEvent(addButton, 'click')
//             .pipe(
//                 map(() => 1),
//                 scan((acc, value) => acc + value, 0),
//                 tap(count => this.updateCounter(count))
//             );

//         const startClick$ = fromEvent(startButton, 'click');
//         const stopClick$ = fromEvent(stopButton, 'click');

//         this.clickSubscription = startClick$.subscribe(() => {
//             this.clickSubscription = click$.subscribe();
//         });

//         stopClick$.subscribe(() => {
//             if (this.clickSubscription) {
//                 this.clickSubscription.unsubscribe();
//             }
//         });
//     }

//     private updateCounter(count: number) {
//         this.counterElement.textContent = `${count}`;
//     }
// }

// ZAD 11

// export class ClickCounter {
//   private clickSubscriptionFirst: any;
//   private clickSubscriptionSecond: any;
//   private firstInput: HTMLInputElement;
//   private secondInput: HTMLInputElement;

//   constructor(
//     private addButton: HTMLButtonElement,
//     private firstButton: HTMLButtonElement,
//     private secondButton: HTMLButtonElement,
//     private firstInputId: string,
//     private secondInputId: string
//   ) {
//     this.firstInput = document.getElementById(firstInputId) as HTMLInputElement;
//     this.secondInput = document.getElementById(
//       secondInputId
//     ) as HTMLInputElement;

//     const click$ = fromEvent(addButton, "click").pipe(
//       map(() => 1),
//       scan((acc, value) => acc + value, 0),
//       shareReplay(1),
//     );

//     const firstClick$ = fromEvent(firstButton, "click");
//     const secondClick$ = fromEvent(secondButton, "click");

//     firstClick$.subscribe(() => {
//       if (this.clickSubscriptionSecond) {
//         this.clickSubscriptionSecond.unsubscribe();
//       }
//       if (this.clickSubscriptionFirst) {
//         this.clickSubscriptionFirst.unsubscribe();
//       }
//       this.clickSubscriptionFirst = click$.subscribe((count) =>
//         this.updateFirstInput(count)
//       );
//     });

//     secondClick$.subscribe(() => {
//       if (this.clickSubscriptionFirst) {
//         this.clickSubscriptionFirst.unsubscribe();
//       }
//       if (this.clickSubscriptionSecond) {
//         this.clickSubscriptionSecond.unsubscribe();
//       }
//       this.clickSubscriptionSecond = click$.subscribe((count) =>
//         this.updateSecondInput(count)
//       );
//     });
//   }

//   private updateFirstInput(count: number) {
//     this.firstInput.value = `Clicks: ${count}`;
//   }

//   private updateSecondInput(count: number) {
//     this.secondInput.value = `Clicks: ${count}`;
//   }
// }

