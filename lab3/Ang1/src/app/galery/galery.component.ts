import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl:'galery.component.html',
  styleUrls: ['galery.component.css']
})
export class GaleryComponent {

  photos = [
    'assets/photo/1.png',
    'assets/photo/2.jpg',
    'assets/photo/3.webp',
   
  ];
  currentIndex: number = 0;

  showPreviousPhoto(){
    if (this.currentIndex>0) {
      this.currentIndex--;
    }
    else{
      alert("To jest pierwsze zdjęcie")
    }
    

  }

  showNextPhoto(){
  
      if (this.currentIndex < this.photos.length - 1) {
        this.currentIndex++;
      } else {
        alert('To jest ostatnie zdjęcie.');
      }
  }

}
