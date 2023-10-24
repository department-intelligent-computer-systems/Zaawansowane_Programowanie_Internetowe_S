import { Author } from "./Author";
import { IDataType } from "./IDataType";

export class DataHTML implements IDataType{
constructor(private authors : Author[]){
}
getData(): string | Element {
    let table: Element = document.createElement("table");
    let tr: Element = document.createElement("tr");
    let th1: Element = document.createElement("th");
    th1.innerHTML = "Imie";
    let th2: Element = document.createElement("th");
    th2.innerHTML = "Nazwisko";
    let th3: Element = document.createElement("th");
    th3.innerHTML = "Email";
    tr.append(th1);
    tr.append(th2);
    tr.append(th3);
    table.append(tr);
    this.authors.forEach(author => {
        let tr: Element = document.createElement("tr");
        let td1: Element = document.createElement("td");
        td1.innerHTML = author.firstName;
        let td2: Element = document.createElement("td");
        td2.innerHTML = author.lastName;
        let td3: Element = document.createElement("td");
        td3.innerHTML = author.email;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        table.append(tr);
    });
    return table;
}
}