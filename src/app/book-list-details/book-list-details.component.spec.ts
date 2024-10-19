import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDetailsComponent } from './book-list-details.component';

describe('BookListDetailsComponent', () => {
  let component: BookListDetailsComponent;
  let fixture: ComponentFixture<BookListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
