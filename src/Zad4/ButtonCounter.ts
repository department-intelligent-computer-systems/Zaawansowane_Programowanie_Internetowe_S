export class ButtonCounter {
  private value: number = 0;
  private inputElement: HTMLInputElement;
  private plusButton: HTMLButtonElement;
  private minusButton: HTMLButtonElement;

  constructor() {
    this.inputElement = document.getElementById('counterInput') as HTMLInputElement;
    this.plusButton = document.getElementById('plusButton') as HTMLButtonElement;
    this.minusButton = document.getElementById('minusButton') as HTMLButtonElement;

    this.plusButton.addEventListener('click', this.increment.bind(this));
    this.minusButton.addEventListener('click', this.decrement.bind(this));
  }

  private increment() {
    this.value += 1;
    this.inputElement.value = this.value.toString();
  }

  private decrement() {
    this.value -= 1;
    this.inputElement.value = this.value.toString();
  }
}

  
