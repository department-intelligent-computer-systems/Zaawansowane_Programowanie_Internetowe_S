import { Component } from '@angular/core';

@Component({
  selector: 'favorite-links',
  templateUrl: 'favorite-links.component.html',
  styleUrls: ['favorite-links.component.css']
})
export class FavoriteLinksComponent {
  favoriteLinks = [
    { name: 'Google', url: 'https://www.google.com', color: 'blue' },
    { name: 'GitHub', url: 'https://www.github.com', color: 'blue' },
    { name: 'Angular', url: 'https://angular.io', color: 'blue' },
  ];

  selectedLinkIndex: number = -1;

  selectLink(index: number) {
    this.selectedLinkIndex = index;
  }
}
