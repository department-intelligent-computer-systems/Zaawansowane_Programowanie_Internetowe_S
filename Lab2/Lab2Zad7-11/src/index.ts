import { Observer, Subscription, fromEvent,  } from "rxjs";
import {   take, scan, tap, finalize, shareReplay } from "rxjs/operators";

class Counter {
    private ClickButton:HTMLElement
    private StartButton:HTMLElement
    private StopButton:HTMLElement
    private LeftButton:HTMLElement
    private RightButton:HTMLElement
    private LeftInput:HTMLInputElement
    private RightInput:HTMLInputElement
    private subscription: Subscription;
    private count: number = 0;
    constructor() {
        this.ClickButton = document.getElementById("Click");
        this.StartButton = document.getElementById("Start");
        this.StopButton = document.getElementById("Stop");
        this.LeftButton = document.getElementById("LeftButton");
        this.RightButton = document.getElementById("RightButton");
        this.LeftInput = document.getElementById("LeftInput") as HTMLInputElement;
        this.RightInput = document.getElementById("RightInput") as HTMLInputElement;
    }
    public Count(): void {
        this.count++;
        
    }
    getCount(): number {    
        return this.count;
    }
    /*Zad 10
    public Init = () => {
        fromEvent(this.StartButton, "click")
            .subscribe(_ => this.letCount());
        fromEvent(this.StopButton, "click")
            .subscribe(_ => this.stopCount());
       
    }
    
    letCount = () => {
        this.count = 0;
        if(!this.subscription){
            this.subscription=
            fromEvent<Event>(this.ClickButton, "click")
            .pipe(
                tap(Count),
                scan((Count) => Count + 1, 0),
                take(5),)    
            .subscribe(Count => {
                console.log(Count);
             });
            Button.style.backgroundColor = 'white';
            Button.style.color = 'black';
            Button.innerHTML = 'Klikaj dalej';
        }
    }
    stopCount = () => {
        if(this.subscription){
            console.log("halo")
            this.subscription.unsubscribe();
            this.subscription = undefined;
            Button.style.backgroundColor = 'black';
            Button.style.color = 'white';
            Button.innerHTML = 'Starczy tego klikania';
            this.count = 0;
        }
    }
    */
   public Init = () => {
    fromEvent(this.LeftButton, "click")
        .subscribe(_ => this.leftInputCount());
    fromEvent(this.RightButton, "click")
        .subscribe(_ => this.rightInputCount());
   }
   leftInputCount = () => {
    this.count = 0;
    if(!this.subscription){
        this.subscription=
        fromEvent<Event>(this.ClickButton, "click")
        .pipe(
            scan((Count) => Count + 1, 0),
            take(5),
            shareReplay(),)    
        .subscribe(Count => {
            this.LeftInput.value = Count.toString();
         },
         

         );
         this.LeftButton.style.backgroundColor = 'green';
    }
    else{
        this.LeftButton.style.backgroundColor = 'red';
        this.subscription.unsubscribe();
        this.subscription = undefined;
        this.count = 0;
    }
    }
    rightInputCount = () => {
        this.count = 0;
    if(!this.subscription){
        this.subscription=
        fromEvent<Event>(this.ClickButton, "click")
        .pipe(
            scan((Count) => Count + 1, 0),
            take(5),
            shareReplay(),)    
        .subscribe(Count => {
            this.RightInput.value = Count.toString();
         },
         );
        
         this.RightButton.style.backgroundColor = 'green';
    }
    else{
        this.RightButton.style.backgroundColor = 'red';
        this.subscription.unsubscribe();
        this.subscription = undefined;
        this.count = 0;
    }
    }
}
let Button = document.getElementById("Click");
let counter = new Counter();
/*Zad 7
fromEvent<Event>(element, "click")
    .pipe(tap(Count), 
    map(() => counter.getCount()))
    .subscribe(Count => {
                console.log(Count);
    });
*/
/*Zad 8
fromEvent<Event>(Button, "click")
    .pipe(tap(() => counter.getCount()),
     scan((Count) => Count + 1, 0))
    .subscribe(Count => {
                console.log(Count);
    });;
*/
/*Zad 9
fromEvent<Event>(element, "click")
    .pipe(
        tap(() => counter.getCount())   ,
        scan((Count) => Count + 1, 0),
        take(5),
        finalize(() =>{
            element.style.backgroundColor = 'black';
            element.style.color = 'white';
            element.innerHTML = 'Starczy tego klikania';
        }))
    .subscribe(Count => {
                console.log(Count);
    });;
*/

/*Zad 10
let Countdown = new Counter();
Countdown.Init();
*/
let Countdown = new Counter();
Countdown.Init();