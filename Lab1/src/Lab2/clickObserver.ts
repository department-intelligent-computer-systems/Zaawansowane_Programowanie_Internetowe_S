import { Observer } from "rxjs"
export class ClickObserver implements Observer<Event>
{
private id: string;
constructor(id: string) {
this.id = id;
}
next(value: Event): void {
    document.querySelector(`#${this.id}`)!.innerHTML += "click<br/>"
}
error(err: any): void { };
complete(): void { };
}

