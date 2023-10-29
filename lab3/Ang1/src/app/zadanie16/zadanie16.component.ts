import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie16',
  templateUrl: 'zadanie16.component.html',
  styleUrls: ['zadanie16.component.css']
})
export class Zadanie16Component {
  favoriteLinks = [
    { name: 'Google', url: 'https://www.google.com', color: 'black' },
    { name: 'GitHub', url: 'https://www.github.com', color: 'black' },
    { name: 'Stack Overflow', url: 'https://www.stackoverflow.com', color: 'black' }
  ];

  selectedLink? : any
  indexOfSelectedLink : number = -1; 


  constructor() {}

  ngOnInit() {

  }

  deleteLink(index : number) {
    this.favoriteLinks.splice(index, 1);
    this.selectedLink = undefined;
    this.indexOfSelectedLink = -1;
  }

  changeLink(link : any, index:number) {
    this.selectedLink = link;
    this.indexOfSelectedLink = index;
  }


}
