import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '@schoolproject/data';
import { BookService } from '../../book.service';
import { UserService } from '../../../user/user.service';
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
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() book: IBook | undefined;
  @Input() isAllBooks = true;
  @Output() notify = new EventEmitter();
  booklistId: string | null = null;
  faTrash = faTrash;
  faPencil = faPencilAlt;
  faScroll = faScroll;
  faCheck = faCheck;
  faX = faTimes;
  isAdmin = false;
  constructor(
    private bookService: BookService,
    private userSerive: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deleteBook() {
    // this.bookService.deleteBookById(this.book!.id);
  }
  removeBook() {
    this.userSerive
      .removeBookFromBookListUser(this.booklistId!, this.book!.id)
      .subscribe((result) => {
        console.log(result);
      });
    console.log('testLogRemove');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.booklistId = params.get('id');
    });
  }
}
