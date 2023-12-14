import { IObliczenia } from "../interfaces/IObliczenia";

export class Zadanie4 implements IObliczenia {


    constructor(private newValue:number) {
        this.newValue = 0 ;
    }

    increaseDecreaseby1(val: number): number {
        this.newValue += val ;
        return this.newValue;
    }


    printValue(): void {
        const zad4 = document.getElementById("zad4");

        if (zad4) {
            zad4.innerHTML = `
                <button id="addButton">+</button>
                <button id="subtractButton">-</button>
                <br>
                <input type="number" id="inputField" value="${this.newValue}" disabled/>
            `;

            const addButton = document.getElementById("addButton");
            const subtractButton = document.getElementById("subtractButton");
            const inputField = document.getElementById("inputField") as HTMLInputElement;

            if (addButton && subtractButton && inputField) {
                addButton.addEventListener("click", () => {
                    this.increaseDecreaseby1(1);
                    inputField.value = this.newValue.toString();
                });

                subtractButton.addEventListener("click", () => {
                    this.increaseDecreaseby1(-1);
                    inputField.value = this.newValue.toString();
                });
            }
        }
    }

   
    
}