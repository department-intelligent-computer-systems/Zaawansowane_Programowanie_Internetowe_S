import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponent {
  constructor(private communicationService: CommunicationService) {}

  onYesClick() {
    this.communicationService.setResult(true);
  }

  onNoClick() {
    this.communicationService.setResult(false);
  }
}
