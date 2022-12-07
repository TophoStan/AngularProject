import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistAddComponent } from './booklist-add.component';

describe('BooklistAddComponent', () => {
  let component: BooklistAddComponent;
  let fixture: ComponentFixture<BooklistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooklistAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BooklistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
