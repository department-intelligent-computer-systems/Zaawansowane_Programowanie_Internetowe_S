import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent2',
  templateUrl: './komponent2.component.html',
  styleUrls: ['./komponent2.component.css']
})
export class Komponent2Component implements OnInit {

  isFirstClicked:boolean = true;
  isSecondClicked: boolean = false;
  secondTitle: string = '';
  ngOnInit(): void {
    
  }

  constructor() {}

  onSecondClicked(){
    this.isSecondClicked = !this.isSecondClicked;
    this.isFirstClicked = false;
    this.secondTitle = this.isSecondClicked ? "Ukryj pierwszy": "Pokaż drugi";
  }
}
