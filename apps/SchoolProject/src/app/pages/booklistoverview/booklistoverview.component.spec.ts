import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistoverviewComponent } from './booklistoverview.component';

describe('BooklistoverviewComponent', () => {
  let component: BooklistoverviewComponent;
  let fixture: ComponentFixture<BooklistoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooklistoverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BooklistoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
