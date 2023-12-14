import { fromEvent } from "rxjs";


export class Zadanie12 {

    private emptyString: string = ''

    constructor(private input1:string,private paragr:string) {
        this.start();
    }

    private start(): void {

        const input1 = <HTMLInputElement>document.getElementById(this.input1);
        const paragraph = <HTMLParagraphElement>document.getElementById(this.paragr);


        if(input1 && paragraph) {
            input1.addEventListener('input', () => {
                //Zad12
                //paragraph.textContent = input1.value;
                const inputValue = input1.value;

                //Zad13
                if(inputValue.length > 5 ) {
                    paragraph.textContent = input1.value;
                } else {
                    paragraph.textContent = '';
                }
            })

            
        }

        

    }
}