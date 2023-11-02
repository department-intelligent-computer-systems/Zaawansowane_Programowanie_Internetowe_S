import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent1',
  templateUrl: './komponent1.component.html',
  styleUrls: ['./komponent1.component.css']
})
export class Komponent1Component implements OnInit{

  showFirst:boolean = true;
  showSecond:boolean = false;
  ngOnInit(): void {
   
  }

  constructor() {
    
  }

  buttonClicked() {
    this.showFirst = !this.showFirst;
    this.showSecond = !this.showSecond;
    
  }
}
