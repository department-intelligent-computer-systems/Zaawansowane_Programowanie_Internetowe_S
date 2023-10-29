import { Component } from '@angular/core';

@Component({
  selector: 'app-zadanie9',
  templateUrl: 'zadanie9.component.html',
  styleUrls: [ 'zadanie9.component.css'
  ]
})
export class Zadanie9Component {
  photos = [
    'zdjecie1',
    'zdjecie2',
    'zdjecie3',
  ];

  currentPhotoIndex : number = 0;
  photosNumber : number = 0;

  constructor() {

  }

  ngOnInit() {
    this.photosNumber = this.photos.length - 1;
  }

  showNextPhoto() {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    } else {
      alert('To jest ostatnie zdjęcie.');
    }
  }

  showPreviousPhoto() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    } else {
      alert('To jest pierwsze zdjęcie.');
    }
  }
}



