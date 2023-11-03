import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponent {
  showFirstComponent = true;
  showResult = false;
  resultMessage: string = '';

  constructor(private communicationService: CommunicationService) {}

  showSecondComponent() {
    this.showFirstComponent = false;
  }

  ngOnInit() {
    this.communicationService.result$.subscribe((result) => {
      this.showResult = true;
      this.resultMessage = result ? "Cieszę się! Idźmy dalej!" : "Przykro mi, że się nie uczysz.";
    });
  }
}
