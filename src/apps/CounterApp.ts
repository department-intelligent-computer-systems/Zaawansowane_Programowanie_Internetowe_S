// Zadanie 4
export class CounterApp {
  private _value: number;
  private _counterInput: HTMLInputElement;

  constructor(value: number) {
    this._value = value;
    this._counterInput = document.getElementById('counterInput') as HTMLInputElement;
    this._counterInput.value = this._value.toString(); 
    this.initializeEventListeners();
  }

  get value(): number {
    return this._value;
  }

  private initializeEventListeners() {
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    if (incrementButton && decrementButton) {
      incrementButton.addEventListener('click', () => this.addToValue());
      decrementButton.addEventListener('click', () => this.subFromValue());
    }
  }

  public addToValue(): void {
    this._value = this._value + 1;
    this.updateCounterInputValue();
  }

  public subFromValue(): void {
    if (this._value > 0) {
      this._value = this._value - 1;
      this.updateCounterInputValue();
    }
  }

  private updateCounterInputValue(): void {
    this._counterInput.value = this._value.toString();
  }
}


