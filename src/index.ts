import Author from "./Author";
class CounterApp {
  private counterInput: HTMLInputElement;
  private incrementButton: HTMLButtonElement;
  private decrementButton: HTMLButtonElement;
  private count: number = 0;

  constructor() {
    this.counterInput = document.getElementById(
      "counterInput"
    ) as HTMLInputElement;
    this.incrementButton = document.getElementById(
      "incrementButton"
    ) as HTMLButtonElement;
    this.decrementButton = document.getElementById(
      "decrementButton"
    ) as HTMLButtonElement;

    this.addEventListeners();
    this.updateCounterDisplay();
  }

  private addEventListeners() {
    this.incrementButton.addEventListener("click", () =>
      this.incrementCounter()
    );
    this.decrementButton.addEventListener("click", () =>
      this.decrementCounter()
    );
  }

  private incrementCounter() {
    this.count++;
    this.updateCounterDisplay();
  }

  private decrementCounter() {
    if (this.count > 0) {
      this.count--;
      this.updateCounterDisplay();
    }
  }

  private updateCounterDisplay() {
    this.counterInput.value = this.count.toString();
  }
}

const app = new CounterApp();
class Aplikacja {
  public async pobierzDane(): Promise<Author[]> {
    try {
      const response = await fetch("data.json");
      const dane = await response.json();
      console.log(dane);

      if (Array.isArray(dane)) {
        const autorzy: Author[] = dane.map(
          (d: any) => new Author(d.id, d.firstname, d.lastname, d.email)
        );
        return autorzy;
      } else {
        throw new Error("Nieprawidłowy format danych JSON");
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
      return [];
    }
  }

  public async uruchom(): Promise<void> {
    const autorzy = await this.pobierzDane();
    if (autorzy.length > 0) {
      const authorList = document.getElementById("authorList");
      if (authorList != null) {
        if (autorzy.length === 0) {
          authorList.innerHTML = "Brak dostępnych danych autorów.";
        } else {
          const authorHTML = autorzy.map((autor) => {
            return `<div>
                          <p>ID: ${autor.getid()}</p>
                          <p>Imię: ${autor.getfirstName()}</p>
                          <p>Nazwisko: ${autor.getlastName()}</p>
                          <p>Email: ${autor.getemail()}</p>
                        </div>`;
          });

          authorList.innerHTML = authorHTML.join("");
          const authorList2 = document.getElementById("authorList2");
          if (authorList2 != null) {
            const authorHTML = Author.retrieveData(autorzy, "list");
            authorList2.innerHTML = authorHTML;
          }

          const displayFormatSelect = document.getElementById(
            "displayFormat"
          ) as HTMLSelectElement;
          const authorList3 = document.getElementById("authorList3");

          if (displayFormatSelect && authorList3) {
            displayFormatSelect.addEventListener("change", updateDisplayFormat);

            function updateDisplayFormat() {
              const selectedFormat = displayFormatSelect.value;
              const authorHTML = Author.retrieveData(autorzy, selectedFormat);
              if (authorList3) {
                switch (selectedFormat) {
                  case "list":
                    authorList3.innerHTML = `<ul>${authorHTML}</ul>`;
                    break;
                  case "numbered-list":
                    authorList3.innerHTML = `<ol>${authorHTML}</ol>`;
                    break;
                  case "table":
                    authorList3.innerHTML = `<table>${authorHTML}</table>`;
                    break;
                  default:
                    console.log("Invalid display format.");
                }
              }
            }
          }
        }
      }
    } else {
      console.log("Brak dostępnych danych autorów.");
    }
  }
}

const aplikacja = new Aplikacja();
aplikacja.uruchom();

/ class CounterApp {
  //   private counterInput: HTMLInputElement;
  //   private incrementButton: HTMLButtonElement;
  //   private decrementButton: HTMLButtonElement;
  //   private count: number = 0;
  
  //   constructor() {
  //     this.counterInput = document.getElementById(
  //       "counterInput"
  //     ) as HTMLInputElement;
  //     this.incrementButton = document.getElementById(
  //       "incrementButton"
  //     ) as HTMLButtonElement;
  //     this.decrementButton = document.getElementById(
  //       "decrementButton"
  //     ) as HTMLButtonElement;
  
  //     this.addEventListeners();
  //     this.updateCounterDisplay();
  //   }
  
  //   private addEventListeners() {
  //     this.incrementButton.addEventListener("click", () =>
  //       this.incrementCounter()
  //     );
  //     this.decrementButton.addEventListener("click", () =>
  //       this.decrementCounter()
  //     );
  //   }
  
  //   private incrementCounter() {
  //     this.count++;
  //     this.updateCounterDisplay();
  //   }
  
  //   private decrementCounter() {
  //     if (this.count > 0) {
  //       this.count--;
  //       this.updateCounterDisplay();
  //     }
  //   }
  
  //   private updateCounterDisplay() {
  //     this.counterInput.value = this.count.toString();
  //   }
  // }
  
  // class Aplikacja {
  //   public async pobierzDane(): Promise<Author[]> {
  //     try {
  //       const response = await fetch("data.json");
  //       const dane = await response.json();
  //       console.log(dane);
  
  //       if (Array.isArray(dane)) {
  //         const autorzy: Author[] = dane.map(
  //           (d: any) => new Author(d.id, d.firstname, d.lastname, d.email)
  //         );
  //         return autorzy;
  //       } else {
  //         throw new Error("Nieprawidłowy format danych JSON");
  //       }
  //     } catch (error) {
  //       console.error("Wystąpił błąd podczas pobierania danych:", error);
  //       return [];
  //     }
  //   }
  
  //   public async uruchom(): Promise<void> {
  //     const autorzy = await this.pobierzDane();
  //     if (autorzy.length > 0) {
  //       const authorList = document.getElementById("authorList");
  //       if (authorList != null) {
  //         if (autorzy.length === 0) {
  //           authorList.innerHTML = "Brak dostępnych danych autorów.";
  //         } else {
  //           const authorHTML = autorzy.map((autor) => {
  //             return `<div>
  //                           <p>ID: ${autor.getid()}</p>
  //                           <p>Imię: ${autor.getfirstName()}</p>
  //                           <p>Nazwisko: ${autor.getlastName()}</p>
  //                           <p>Email: ${autor.getemail()}</p>
  //                         </div>`;
  //           });
  
  //           authorList.innerHTML = authorHTML.join("");
  //           const authorList2 = document.getElementById("authorList2");
  //           if (authorList2 != null) {
  //             const authorHTML = Author.retrieveData(autorzy, "list");
  //             authorList2.innerHTML = authorHTML;
  //           }
  
  //           const displayFormatSelect = document.getElementById(
  //             "displayFormat"
  //           ) as HTMLSelectElement;
  //           const authorList3 = document.getElementById("authorList3");
  
  //           if (displayFormatSelect && authorList3) {
  //             displayFormatSelect.addEventListener("change", updateDisplayFormat);
  
  //             function updateDisplayFormat() {
  //               const selectedFormat = displayFormatSelect.value;
  //               const authorHTML = Author.retrieveData(autorzy, selectedFormat);
  //               if (authorList3) {
  //                 switch (selectedFormat) {
  //                   case "list":
  //                     authorList3.innerHTML = `<ul>${authorHTML}</ul>`;
  //                     break;
  //                   case "numbered-list":
  //                     authorList3.innerHTML = `<ol>${authorHTML}</ol>`;
  //                     break;
  //                   case "table":
  //                     authorList3.innerHTML = `<table>${authorHTML}</table>`;
  //                     break;
  //                   default:
  //                     console.log("Invalid display format.");
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     } else {
  //       console.log("Brak dostępnych danych autorów.");
  //     }
  //   }
  // }
  
  // const aplikacja = new Aplikacja();
  // aplikacja.uruchom();
  //lab2 zad7
  // class ClickCounterApp {
  //   clickCount: number;
  //   paragraph: HTMLElement | null;
  //   clickStream: any;
  //   button: HTMLElement | null;
  //   constructor() {
  //     this.clickCount = 0;
  
  //     this.paragraph = document.getElementById("clickCountParagraph");
  //     this.button = document.getElementById("clickButton");
  
  //     if (this.button) {
  //       this.clickStream = fromEvent(this.button, "click");
  
  //       this.clickStream
  //         .pipe(
  //           tap(() => {
  //             this.clickCount++;
  //             this.updateClickCount();
  //           })
  //         )
  //         .subscribe();
  //     }
  //   }
  
  //   updateClickCount() {
  //     if (this.paragraph !== null) {
  //       this.paragraph.textContent = `Liczba kliknięć: ${this.clickCount}`;
  //     }
  //   }
  // }
  
  // const app = new ClickCounterApp();
  
  //zad 8
  
  // class ClickCounterApp {
  //   paragraph: HTMLElement | null;
  //   button: HTMLElement | null;
  //   clickStream: any;
  
  //   constructor() {
  //     this.paragraph = document.getElementById("clickCountParagraph");
  //     this.button = document.getElementById("clickButton");
  
  //     if (this.button) {
  //       this.clickStream = fromEvent(this.button, "click");
  
  //       this.clickStream
  //         .pipe(
  //           map(() => 1),
  //           scan((count: number, increment: number) => count + increment, 0),
  //           tap((clickCount: any) => this.updateClickCount(clickCount))
  //         )
  //         .subscribe();
  //     }
  //   }
  
  //   updateClickCount(clickCount: number) {
  //     if (this.paragraph !== null) {
  //       this.paragraph.textContent = `Liczba kliknięć: ${clickCount}`;
  //     }
  //   }
  // }
  
  // const app = new ClickCounterApp();
  
  //zad9
  
  // class ClickCounterApp {
  //   paragraph: HTMLElement | null;
  //   button: HTMLElement | null;
  //   clickStream: any;
  
  //   constructor() {
  //     this.paragraph = document.getElementById("clickCountParagraph");
  //     this.button = document.getElementById("clickButton");
  
  //     if (this.button) {
  //       this.clickStream = fromEvent(this.button, "click");
  
  //       this.clickStream
  //         .pipe(
  //           map(() => 1),
  //           scan((count, increment: number) => count + increment, 0),
  //           take(5),
  //           tap((clickCount: any) => this.updateClickCount(clickCount))
  //         )
  //         .subscribe();
  //     }
  //   }
  
  //   updateClickCount(clickCount: number) {
  //     if (this.paragraph !== null) {
  //       this.paragraph.textContent = `Liczba kliknięć: ${clickCount}`;
  //     }
  //   }
  // }
  
  // const app = new ClickCounterApp();
  
  //zada10
  
  // class ClickCounterApp {
  //   paragraph: HTMLElement | null;
  //   startButton: HTMLElement | null;
  //   stopButton: HTMLElement | null;
  //   countButton: HTMLElement | null;
  //   clickStream: Observable<any>;
  //   subscription: Subscription | null;
  
  //   constructor() {
  //     // Znajdujemy paragraf w dokumencie, do którego będziemy wpisywać liczbę kliknięć
  //     this.paragraph = document.getElementById("clickCountParagraph");
  //     this.startButton = document.getElementById("startButton");
  //     this.stopButton = document.getElementById("stopButton");
  //     this.countButton = document.getElementById("countButton");
  
  //     this.subscription = null;
  
  //     if (this.startButton && this.stopButton && this.countButton) {
  //       this.clickStream = fromEvent(this.countButton, "click");
  
  //       fromEvent(this.startButton, "click").subscribe(() => {
  //         if (this.subscription) {
  //           this.subscription.unsubscribe();
  //         }
  //         this.subscription = this.clickStream
  //           .pipe(
  //             map(() => 1),
  //             scan((count, increment: any) => count + increment, 0)
  //           )
  //           .subscribe((clickCount) => this.updateClickCount(clickCount));
  //       });
  
  //       fromEvent(this.stopButton, "click").subscribe(() => {
  //         if (this.subscription) {
  //           this.subscription.unsubscribe();
  //         }
  //       });
  //     }
  //   }
  
  //   updateClickCount(clickCount: number) {
  //     if (this.paragraph !== null) {
  //       this.paragraph.textContent = `Liczba kliknięć: ${clickCount}`;
  //     }
  //   }
  // }
  
  // const app = new ClickCounterApp();
  //zad11
  
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
  //       shareReplay(1)
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
  
  // const addButton = document.querySelector("#buttonAdd") as HTMLButtonElement;
  // const firstButton = document.querySelector("#buttonFirst") as HTMLButtonElement;
  // const secondButton = document.querySelector(
  //   "#buttonSecond"
  // ) as HTMLButtonElement;
  
  // if (addButton && firstButton && secondButton) {
  //   const firstInputId = "inputFirst";
  //   const secondInputId = "inputSecond";
  //   const app = new ClickCounter(
  //     addButton,
  //     firstButton,
  //     secondButton,
  //     firstInputId,
  //     secondInputId
  //   );
  // } else {
  //   console.error("Could not find one or more buttons");
  // }
  //12
  
  // const inputField = document.getElementById("inputField");
  // const outputParagraph = document.getElementById("outputParagraph");
  
  // if (inputField && outputParagraph) {
  //   const inputObservable = fromEvent(inputField, "input").pipe(
  //     map((event) => (event.target as HTMLInputElement).value)
  //   );
  
  //   inputObservable.subscribe((text) => {
  //     outputParagraph.textContent = text;
  //   });
  // }
  
  //zad13
  
  // const inputField = document.getElementById("inputField");
  // const outputParagraph = document.getElementById("outputParagraph");
  
  // if (inputField && outputParagraph) {
  //   const inputObservable = fromEvent(inputField, "input").pipe(
  //     map((event) => (event.target as HTMLInputElement).value),
  //     filter((text) => text.length > 5)
  //   );
  
  //   inputObservable.subscribe((text) => {
  //     outputParagraph.textContent = text;
  //   });
  // }
  
  //z14
  // const inputField = document.getElementById("inputField");
  // const lengthThresholdInput = document.getElementById("lengthThresholdInput");
  // const outputParagraph = document.getElementById("outputParagraph");
  
  // if (inputField && lengthThresholdInput && outputParagraph) {
  //   const inputObservable = fromEvent(inputField, "input").pipe(
  //     map((event) => (event.target as HTMLInputElement).value)
  //   );
  
  //   const thresholdObservable = fromEvent(lengthThresholdInput, "input").pipe(
  //     map((event) => parseInt((event.target as HTMLInputElement).value, 10))
  //   );
  
  //   combineLatest(inputObservable, thresholdObservable).subscribe(
  //     ([text, threshold]) => {
  //       if (!isNaN(threshold) && text.length > threshold) {
  //         outputParagraph.textContent = text;
  //       } else {
  //         outputParagraph.textContent = "";
  //       }
  //     }
  //   );
  // }
  //z15
  
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
  
  // //16
  // const side1Input = document.getElementById("side1") as HTMLInputElement;
  // const side2Input = document.getElementById("side2") as HTMLInputElement;
  // const resultDiv = document.getElementById("result") as HTMLDivElement;
  
  // const maxRetryAttempts = 3;
  // let retryCount = 0;
  
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
  
  // const resetRetryCount = () => {
  //   retryCount = 0;
  // };
  
  // side1Input$
  //   .pipe(
  //     mergeMap((side1) =>
  //       side2Input$.pipe(
  //         map((side2) =>
  //           calculateSquareArea(parseFloat(side1), parseFloat(side2))
  //         ),
  //         catchError((error) => {
  //           retryCount++;
  //           if (retryCount < maxRetryAttempts) {
  //             showError(error);
  //             return throwError(error);
  //           } else {
  //             showError("Wprowadziłeś błędną wartość 4 razy. Koniec zabawy.");
  //             return throwError("Koniec zabawy");
  //           }
  //         }),
  //         retry(maxRetryAttempts),
  //         takeWhile(() => retryCount < maxRetryAttempts + 1)
  //       )
  //     )
  //   )
  //   .subscribe(
  //     (result) => {
  //       resultDiv.textContent = `Pole kwadratu wynosi: ${result}`;
  //       resetRetryCount();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  //zad 17
  
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
  //           return throwError(error);
  //         }),
  //         retry()
  //       )
  //     )
  //   )
  //   .subscribe(
  //     (result) => {
  //       resultDiv.textContent = `Pole kwadratu wynosi: ${result}`;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  
  //18
  
  // const side1Input = document.getElementById("side1") as HTMLInputElement;
  // const side2Input = document.getElementById("side2") as HTMLInputElement;
  // const resultDiv = document.getElementById("result") as HTMLDivElement;
  
  // const side1Input$ = fromEvent(side1Input, "input").pipe(
  //   map((event) => (event.target as HTMLInputElement).value),
  //   filter(value => value.trim() !== "")
  // );
  
  // const side2Input$ = fromEvent(side2Input, "input").pipe(
  //   map((event) => (event.target as HTMLInputElement).value),
  //   filter(value => value.trim() !== "")
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
  //           return throwError(error);
  //         }),
  //         retry()
  //       )
  //     )
  //   )
  //   .subscribe(
  //     (result) => {
  //       resultDiv.textContent = `Pole kwadratu wynosi: ${result}`;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  
  //19
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
  //20
  
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
  //zad 21
  
  // const apiUrl = "./data.json";
  
  // const ajaxObservable = ajax.getJSON(apiUrl);
  
  // ajaxObservable.subscribe(
  //   (response) => {
  //     console.log("Odpowiedź z serwera:", response);
  //   },
  //   (error) => {
  //     console.error("Błąd podczas pobierania danych:", error);
  //   }
  // );
  // z22;
  // const serverUrl = "data.json";
  
  // function createTable(data: any[]) {
  //   const table = document.createElement("table");
  //   const thead = table.createTHead();
  //   const tbody = table.createTBody();
  
  //   const headerRow = thead.insertRow();
  //   for (const key in data[0]) {
  //     const th = document.createElement("th");
  //     th.textContent = key;
  //     headerRow.appendChild(th);
  //   }
  
  //   data.forEach((item) => {
  //     const row = tbody.insertRow();
  //     for (const key in item) {
  //       const cell = row.insertCell();
  //       cell.textContent = item[key];
  //     }
  //   });
  
  //   return table;
  // }
  
  // const request = ajax.getJSON(serverUrl);
  
  // request.subscribe(
  //   (response) => {
  //     const data = Array.isArray(response) ? response : [response];
  //     const table = createTable(data);
  //     const appElement = document.getElementById("app");
  //     if (appElement) {
  //       appElement.appendChild(table);
  //     } else {
  //       console.error('Nie znaleziono elementu o id "app" w HTML.');
  //     }
  //   },
  //   (error) => {
  //     console.error("Błąd podczas pobierania pliku JSON:", error);
  //   }
  // );
  
