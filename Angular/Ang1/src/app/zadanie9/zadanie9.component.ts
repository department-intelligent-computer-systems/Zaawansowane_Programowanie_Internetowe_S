import { Component, OnInit } from "@angular/core";
import { Lightbox } from "ngx-lightbox";
@Component({
  selector: "app-zadanie9",
  templateUrl: "./zadanie9.component.html",
  styleUrls: ["./zadanie9.component.css"],
})
export class Zadanie9Component implements OnInit {
  galleryTitle: string = "Galeria zdjęć";

  currentPhoto: number = 0;
  photosNumber: number = 0;
  ngOnInit(): void {
    this.photosNumber = this.gallery.length - 1;
  }

  gallery: any = [];
  myphotos: any = [
    "./assets/images/photo1.jpg",
    "./assets/images/photo2.jpg",
    "./assets/images/photo3.jpg",
    "./assets/images/photo4.jpg",
  ];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i < 5; i++) {
      const src = "./assets/images/photo" + i + ".jpg";
      const caption = "Image " + i + " caption";
      const photos = {
        src: src,
        caption: caption,
      };
      this.gallery.push(photos);
    }
  }

  open(index: number) {
    this.lightbox.open(this.gallery, index);
  }

  close(): void {
    this.lightbox.close();
  }

  showNext() {
    if (this.currentPhoto < this.gallery.length - 1) {
      this.currentPhoto++;
    } else {
      alert("Nie ma więcej zdjęć");
    }
  }

  showPrevious() {
    if (this.currentPhoto > 0) {
      this.currentPhoto--;
    } else {
      alert("Jest to pierwsze zdjęcie, nie ma wcześniejszego");
    }
  }

  showNextArray() {
    if (this.currentPhoto < this.myphotos.length - 1) {
      this.currentPhoto++;
    } else {
      alert("Nie ma więcej zdjęć");
    }
  }

  showPreviousArray() {
    if (this.currentPhoto > 0) {
      this.currentPhoto--;
    } else {
      alert("Jest to pierwsze zdjęcie, nie ma wcześniejszego");
    }
  }
}
