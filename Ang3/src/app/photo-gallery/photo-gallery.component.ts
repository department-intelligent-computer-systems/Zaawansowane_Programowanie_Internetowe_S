import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: 'photo-gallery.component.html',
  styleUrls: ['photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  photos = [
    'assets/photo1.jpg',
    'assets/photo2.jpg',
    'assets/photo3.jpg',
    //'assets/photo4.jpg',
  ];

  currentPhotoIndex: number = 0;
//zad9
  // showPrevious() {
  //   if (this.currentPhotoIndex > 0) {
  //     this.currentPhotoIndex--;
  //   } else {
  //     alert('To jest pierwsze zdjęcie. Nie można wyświetlić wcześniejszego.');
  //   }
  // }

  // showNext() {
  //   if (this.currentPhotoIndex < this.photos.length - 1) {
  //     this.currentPhotoIndex++;
  //   } else {
  //     alert('To jest ostatnie zdjęcie. Nie można wyświetlić następnego.');
  //   }
  // }
  //zad10
  // showPrevious() {
  //   if (this.currentPhotoIndex > 0) {
  //     this.currentPhotoIndex--;
  //   }
  // }
  // showNext() {
  //   if (this.currentPhotoIndex < this.photos.length - 1) {
  //     this.currentPhotoIndex++;
  //   }
  // }
  // isFirstPhoto(): boolean {
  //   return this.currentPhotoIndex === 0;
  // }

  // isLastPhoto(): boolean {
  //   return this.currentPhotoIndex === this.photos.length - 1;
  // }
  //zad11
  showPrevious() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    }
  }

  showNext() {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    }
  }

  isFirstPhoto(): boolean {
    return this.currentPhotoIndex === 0;
  }

  isLastPhoto(): boolean {
    return this.currentPhotoIndex === this.photos.length - 1;
  }
}
