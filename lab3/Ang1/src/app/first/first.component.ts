import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls: ['first.component.css'], 
  
})
export class FirstComponent {
  title: string = "";
  firstStyle: any = {};
  secondStyle: any = {};

  isFirstButtonActivated: boolean = false;
  isSecondButtonActivated: boolean = false;

  
  constructor() {
    
  }

  ngOnInit() { }

  method() {
    return "Wartość zwórocona z metody"
  }

  onClick() {
    this.title = "Marcin Mierzejewski";
  }

  firstButtonClick() {
    this.isFirstButtonActivated = !this.isFirstButtonActivated
  }

  secondButtonClick() {
    this.isSecondButtonActivated = !this.isSecondButtonActivated
  }

}
