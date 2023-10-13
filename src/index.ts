class CounterApp {
    private counter: number;
    private counterInput: HTMLInputElement;
    private incrementButton: HTMLButtonElement;
    private decrementButton: HTMLButtonElement;
  
    constructor() {
      this.counter = 0;
      this.counterInput = document.getElementById('counterInput') as HTMLInputElement;
      this.incrementButton = document.getElementById('incrementButton') as HTMLButtonElement;
      this.decrementButton = document.getElementById('decrementButton') as HTMLButtonElement;
  
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }
  
    private increment() {
      this.counter++;
      this.updateCounterInput();
    }
  
    private decrement() {
      if (this.counter > 0) {
        this.counter--;
        this.updateCounterInput();
      }
    }
  
    private updateCounterInput() {
      this.counterInput.value = this.counter.toString();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new CounterApp();
    
  });