import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie1',
  templateUrl: './zadanie1.component.html',
  styleUrls: ['./zadanie1.component.css']
})
export class Zadanie1Component {
  imie: string = '';
  nazwisko: string = '';
  przekreslony: boolean = false;
  zmienionyRozmiar: boolean = false;

  wyswietlImieINazwisko() {
    this.imie = 'K';
    this.nazwisko = 'T';
  }

  zmienRozmiarCzcionki() {
    this.zmienionyRozmiar = !this.zmienionyRozmiar;
  }

  zmienKolorIPrzekreslTekst() {
    this.przekreslony = !this.przekreslony;
  }
}
