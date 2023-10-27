import { Component } from '@angular/core';

@Component({
  selector: 'app-linki',
  templateUrl:'linki.component.html',
  styleUrls: ['linki.component.css']
})
export class LinkiComponent {

  selectedLink: any = null;

  favoriteLinks = [
    { name: 'Google', url: 'https://www.google.com', color: 'black' },
    { name: 'GitHub', url: 'https://github.com', color: 'black' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', color: 'black' }
  ];
  favoriteLinks2 = [
    { name: 'Google', url: 'https://www.google.com', color: 'black' },
    { name: 'GitHub', url: 'https://github.com', color: 'black' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', color: 'black' }
  ];

 changeColor(link:any) {
    link.color = "blue";
  }


  selectLink(link:any) {
    if (this.selectedLink) {
      this.selectedLink.color = 'black';
    }
    this.selectedLink = link;
    this.selectedLink.color ="blue";
  }
  
/*
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
*/

}
