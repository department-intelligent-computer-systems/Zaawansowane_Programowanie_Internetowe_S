import { Author } from "./Author";
import { IDataType } from "./IDataType";

export class DataListol implements IDataType{
constructor(private authors : Author[]){
}
getData(): string | Element {
    let list = document.createElement("ol");
    list.setAttribute("id","list");
    for(let author of this.authors){
        let li = document.createElement("li");
        li.setAttribute("id","listItem");
        li.innerHTML = `Imie: ${author.firstName} Nazwisko: ${author.lastName} Email: ${author.email}`;
        list.appendChild(li);
    }
    return list;
}
}