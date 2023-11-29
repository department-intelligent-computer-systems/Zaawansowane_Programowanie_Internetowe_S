import { Component } from '@angular/core';

@Component({
  selector: 'app-komp2',
  templateUrl: './komp2.component.html',
  styleUrls: ['./komp2.component.css']
})
export class Komp2Component {

  isFirstClicked:boolean = true;
  isSecondClicked: boolean = false;
  title:string = '';
  ifAnswerTrue = false;
  ifAnswerNegative= false;
  onSecondKomp2Clicked(){
    this.isSecondClicked = !this.isSecondClicked;
  }

  onAnswer(answer:boolean) {
    this.ifAnswerTrue = answer;
    this.title = this.ifAnswerTrue? "Cieszę idźmy dalej" : "Przykro mi, że się męczysz";
  }
}
