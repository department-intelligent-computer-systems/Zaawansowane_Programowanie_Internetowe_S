import { Component } from "@angular/core";

@Component({
  selector: "app-display",
  templateUrl: "./dispaly.component.html",
  styleUrls: ["./display.component.css"],
})
export class DisplayComponent {
  dispTextSwitch: boolean = false;
  dispText: string = "";
  fontSize: boolean = false;
  isGreen: boolean = false;
  isStrikeThrough: boolean = false;
  counter: number = 0;

  show() {
    if (this.dispTextSwitch) {
      this.dispText = "Sebasyian Wiora";
    } else {
      this.dispText = "";
    }
    this.dispTextSwitch = !this.dispTextSwitch;
  }

  changeFontSize() {
    this.fontSize = !this.fontSize;
  }

  changeColorStrikeThrough() {
    this.isGreen = !this.isGreen;
    this.isStrikeThrough = !this.isStrikeThrough;
  }

  likedLinks = [
    { name: "Google", address: "https://www.google.com", chosen: false },
    {
      name: "Youtube",
      address: "https://www.youtube.com",
      chosen: false,
    },
    {
      name: "Facebook",
      address: "https://www.facebook.com",
      chosen: false,
    },
  ];

  changeBackgroundColor(link: any) {
    this.likedLinks.forEach((x) => (x.chosen = false));
    link.chosen = true;
  }

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }

  changeCounter(count: number) {
    this.counter += count;
  }

  photos = [
    "../../assets/photo.jpg",
    "../../assets/photo1.jpg",
    "../../assets/photo2.jpg",
  ];

  photoIndex: number = 0;

  previousPhoto() {
    if (this.photoIndex > 0) {
      this.photoIndex--;
    } else {
      alert("this is first photo");
    }
  }

  nextPhoto() {
    if (this.photoIndex < this.photos.length - 1) {
      this.photoIndex++;
    } else {
      alert("this is last photo");
    }
  }

  previousPhotoDisabled(): boolean {
    return this.photoIndex === 0;
  }

  nextPhotoDisabled(): boolean {
    return this.photoIndex === this.photos.length - 1;
  }
}
