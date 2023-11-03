import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailListComponent } from './thumbnail-list.component';

describe('ThumbnailListComponent', () => {
  let component: ThumbnailListComponent;
  let fixture: ComponentFixture<ThumbnailListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbnailListComponent]
    });
    fixture = TestBed.createComponent(ThumbnailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
