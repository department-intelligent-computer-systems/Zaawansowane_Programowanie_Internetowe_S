import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-komp1',
  templateUrl: './komp1.component.html',
  styleUrls: ['./komp1.component.css']
})
export class Komp1Component implements OnInit{

  showFirst:boolean = true;
  showSecond:boolean = false;
  ngOnInit(): void {
    
  }

  buttonKomp1Clicked() {
    this.showFirst = !this.showFirst;
    this.showSecond = !this.showSecond;
    
  }

}
