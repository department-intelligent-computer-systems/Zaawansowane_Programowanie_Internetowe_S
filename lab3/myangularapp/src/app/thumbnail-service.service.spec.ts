import { TestBed } from '@angular/core/testing';

import { ThumbnailServiceService } from './thumbnail-service.service';

describe('ThumbnailServiceService', () => {
  let service: ThumbnailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThumbnailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
