import { Component } from "@angular/core";

interface Link {
  name: string;
  color: string;
}

@Component({
  selector: "app-second-test",
  template: `
    <p class="{{ zielonnyClass }} {{ classSize }}">
      {{ firstP }}
    </p>
    <button type="button" (click)="handleClick()">click</button>
    <button type="button" (click)="handleClick2()">clickZIELONy</button>
    <button type="button" (click)="handleClick3()">click20px</button>
    <ul>
      <li
        *ngFor="let link of links"
        [ngClass]="link.color"
        (click)="changeColor(link)"
      >
        {{ link.name }}
      </li>
    </ul>
    <h1>Wartość: {{ value }}</h1>
    <button (click)="changeValue(1)">+</button>
    <button (click)="changeValue(-1)">-</button>
    <button (click)="changeValue(2)">+2</button>
    <button (click)="changeValue(-2)">-2</button> <br />
    <div *ngIf="photos.length === 0; else gallery">
      <p>No photos available.</p>
    </div>
    <div>
      <ng-template #gallery>
        <img [src]="currentPhoto" alt="Current Photo" />
        <div *ngIf="currentIndex > 0">
          <button (click)="showPreviousPhoto()">Previous</button>
        </div>
        <div *ngIf="currentIndex < photos.length - 1">
          <button (click)="showNextPhoto()">Next</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .red {
        color: red;
        cursor: pointer;
      }
    `,
    `
      .green {
        color: green;
        cursor: pointer;
      }
    `,
    `
      .zielony {
        background: green !important;
      }
    `,
    `
      .classSize {
        font-size: 20px;
      }
    `,
    `
      p {
        background: red;
      }
    `,
  ],
})
export class SecondTestComponent {
  firstP: string = "";
  zielonnyClass: string = "";
  classSize: string = "";
  links: Link[] = [
    { name: "YouTube", color: "red" },
    { name: "Facebook", color: "green" },
  ];
  value: number = 0;

  changeValue(amount: number) {
    this.value += amount;
  }

  changeColor(link: Link) {
    link.color = link.color === "red" ? "green" : "red";
  }

  handleClick() {
    this.firstP = "michal b";
  }

  handleClick3() {
    if (this.classSize == "classSize") {
      this.classSize = "";
    } else {
      this.classSize = "classSize";
    }
  }

  handleClick2() {
    if (this.zielonnyClass == "zielony") {
      this.zielonnyClass = "";
    } else {
      this.zielonnyClass = "zielony";
    }
  }

  photos: string[] = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"];
  currentIndex: number = 0;
  currentPhoto: string = this.photos[0];

  showPreviousPhoto() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentPhoto = this.photos[this.currentIndex];
    } else {
      alert("This is the first photo. Cannot go back further.");
    }
  }

  showNextPhoto() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
      this.currentPhoto = this.photos[this.currentIndex];
    } else {
      alert("This is the last photo. Cannot go forward further.");
    }
  }
}
