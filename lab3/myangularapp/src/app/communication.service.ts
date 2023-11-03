import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private resultSource = new Subject<boolean>();

  result$ = this.resultSource.asObservable();

  setResult(result: boolean) {
    this.resultSource.next(result);
  }
}