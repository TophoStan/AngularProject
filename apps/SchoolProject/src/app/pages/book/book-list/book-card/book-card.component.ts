import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '@schoolproject/data';
import { BookService } from '../../book.service';
import {
  faCheck,
  faSchool,
  faExclamationCircle,
  faMarsStroke,
  faPencilAlt,
  faScroll,
  faTrash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() book: IBook | undefined;
  faTrash = faTrash;
  faPencil = faPencilAlt;
  faScroll = faScroll;
  faCheck = faCheck;
  faX = faTimes;

  constructor(private bookService: BookService) {}

  deleteBook() {
    console.log('deletes');

    this.bookService.deleteBookById(this.book!.id);
  }

  ngOnInit(): void {}
}
