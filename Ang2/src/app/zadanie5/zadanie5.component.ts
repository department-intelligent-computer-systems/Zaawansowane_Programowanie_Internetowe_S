import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie5',
  templateUrl: './zadanie5.component.html',
  styleUrls: ['./zadanie5.component.css']
})
export class Zadanie5Component {
  ulubioneLinki = [
    { nazwa: 'Google', adres: 'https://www.google.com', kolor: 'black' },
    { nazwa: 'Facebook', adres: 'https://www.facebook.com', kolor: 'black' },
    { nazwa: 'GitHub', adres: 'https://www.github.com', kolor: 'black' }
  ];

  wybranyKolor = 'blue';

  zmienKolor(link : any) {
    link.kolor = this.wybranyKolor;
  }
}
