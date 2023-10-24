export class Zad4 {
    private inputValue: HTMLInputElement;
    private addButton: HTMLButtonElement;
    private subtractButton: HTMLButtonElement;
  
    constructor() {
      this.inputValue = document.createElement("input");
      this.inputValue.type = "text";
      this.inputValue.value = "0";
  
      this.addButton = document.createElement("button");
      this.addButton.textContent = "+";
      this.addButton.addEventListener("click", this.increment.bind(this));
  
      this.subtractButton = document.createElement("button");
      this.subtractButton.textContent = "-";
      this.subtractButton.addEventListener("click", this.decrement.bind(this));
  
      // Dodawanie elementów do dokumentu
      document.body.append(this.inputValue, this.addButton, this.subtractButton);
    }
  
    increment() {
      const currentValue = parseInt(this.inputValue.value, 10);
      this.inputValue.value = (currentValue + 1).toString();
    }
  
    decrement() {
      const currentValue = parseInt(this.inputValue.value, 10);
      if (currentValue > 0) {
        this.inputValue.value = (currentValue - 1).toString();
      }
    }
  }
 