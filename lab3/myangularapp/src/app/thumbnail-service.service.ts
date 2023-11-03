import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailService {
  selectedThumbnail: any;

  selectThumbnail(thumbnail: any) {
    this.selectedThumbnail = thumbnail;
  }

  getSelectedThumbnail() {
    return this.selectedThumbnail;
  }
}