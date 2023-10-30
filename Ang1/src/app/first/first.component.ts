import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: 'first.component.html',
  template: 'first.component.ts',
  styleUrls: ['first.component.css']
})
export class FirstComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    
  }
  fullName: string = '';
  isLargeFont: boolean = false;
  isGreenStrikethrough: boolean = false;
  showName() {
    this.fullName = 'Katarzyna Błachowicz'; 
  }
  toggleFontSize() {
    this.isLargeFont = !this.isLargeFont;
  }
  toggleTextColor() {
    this.isGreenStrikethrough = !this.isGreenStrikethrough;
  }
  applyBothEffects() {
    this.toggleFontSize();
    this.toggleTextColor();
  }
}
