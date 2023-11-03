import { Component } from '@angular/core';
import { ThumbnailService } from '../thumbnail-service.service';
@Component({
  selector: 'app-thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: ['./thumbnail-list.component.css']
})
export class ThumbnailListComponent {
  thumbnails = [
    { url: 'https://www.w3schools.com/images/w3schools_green.jpg', color: 'red' },
    { url: 'assets/photo/2.jpg', color: 'blue' },
   
  ];
  selectedThumbnail: any;

constructor(private thumbnailService: ThumbnailService) {}

selectThumbnail(thumbnail: any) {
  this.thumbnailService.selectThumbnail(thumbnail);
}
}