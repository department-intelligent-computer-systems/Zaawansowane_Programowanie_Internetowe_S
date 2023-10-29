import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie5',
  templateUrl: 'zadanie5.component.html',
  styleUrls: ['zadanie5.component.css']
})
export class Zadanie5Component {
  favoriteLinks = [
    { name: 'Google', url: 'https://www.google.com', color: 'black' },
    { name: 'GitHub', url: 'https://www.github.com', color: 'black' },
    { name: 'Stack Overflow', url: 'https://www.stackoverflow.com', color: 'black' }
  ];

  constructor() {}

  ngOnInit() {

  }

  changeColor(link : any) {
    this.favoriteLinks.forEach((item) => {
      if( item.color !== 'black') 
        item.color = 'black'
    })  // te 3 linijki wyżej usunąć aby był wybór wielokrotny

    link.color = 'red'
  }


}
