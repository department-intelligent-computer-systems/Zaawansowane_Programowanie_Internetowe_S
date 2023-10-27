import { Component } from '@angular/core';

@Component({
  selector: 'app-klik',
  templateUrl:'klik.component.html',
  styleUrls: ['klik.component.css']
})
export class KlikComponent {
  valuePara:number=0;

  plusBtn(){
    this.valuePara++;
  }

  minusBtn(){
    if(this.valuePara>0) 
    this.valuePara--;
  }


  changeValue(increment: number) {
    this.valuePara += increment;
    if (this.valuePara<0){
      this.valuePara=0;
    }
  }

}
