import { Author } from "../classes/Author";
import { IShow } from "../interfaces/IShow";
import * as fs from 'fs';

export class DataJson implements IShow {
  private _authors: Author[];

  constructor(authors: Author[]) {
    this._authors = authors;
  }

  show(): void {
    const jsonData = JSON.stringify(this._authors,null,2);

    const blob = new Blob([jsonData], {type:"application/json"});

    const link1 = '<a href="">Pobierz plik json</a>'
    

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "authors.json";
    link.innerText = "Pobierz plik JSON"

    const linkContainer = document.getElementById('dataJson-container');
    if(linkContainer) {
      linkContainer.appendChild(link)
      link.addEventListener("click", () => {
        
        link.click();
      })
    }

    // link.addEventListener("click", () => {
    //   document.body.removeChild(link)
    // })


    // document.body.appendChild(link);
    // link.click();

    // document.body.removeChild(link);
    
  }
}
